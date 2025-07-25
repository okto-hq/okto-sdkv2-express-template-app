import { canonicalize } from "json-canonicalize";
import { signMessage } from "viem/accounts";
import { sha256 } from "@noble/hashes/sha256";
import { v4 as uuidv4 } from "uuid";
import { GetUserKeysResponse } from "../../types/getUserKeys";
import { SessionConfig } from "../../types/sessionConfig";

type SignType = "EIP191" | "EIP712";
type message = string;

export function generateUUID() {
  return uuidv4();
}

/**
 * Creates a payload for message signing.
 *
 * Prepares a structured payload containing the message to be signed, authentication data, and cryptographic challenge for the signing service.
 * Supports both EIP-191 standard messages and EIP-712 typed data.
 *
 * @param userKeys - User's key information with ECDSA key ID
 * @param session - Session data with keys and user SWA
 * @param message - Message content to sign
 * @param signType - Signature standard to use ("EIP191" or "EIP712")
 * @returns Payload for the Okto signing service
 */
export async function generateSignMessagePayload(
  userKeys: GetUserKeysResponse,
  session: SessionConfig,
  message: message,
  signType: SignType
) {
  const raw_message_to_sign = {
    requestType: signType,
    signingMessage: message
  };

  const transaction_id = generateUUID();

  const base64_message_to_sign = {
    [transaction_id]: raw_message_to_sign
  };

  const base64_message = canonicalize(base64_message_to_sign);

  const setup_options = {
    t: 2, // Threshold; 2,3 MPC
    key_id: userKeys.ecdsaKeyId,
    message: base64_message,
    // TODO: Add support for other signing algorithms (e.g. ed25519)
    signAlg: "secp256k1"
  };

  const canonicalize_setup_options = canonicalize(setup_options);

  const sha_1 = sha256(canonicalize_setup_options);
  const sha_2 = sha256(sha_1);
  const challenge = Buffer.from(sha_2).toString("hex");

  const enc = new TextEncoder();
  const rawMessagePayload = enc.encode(
    canonicalize({
      setup: setup_options,
      challenge: challenge,
    }),
  );

  const sig = await signMessage({
    message: {
      raw: rawMessagePayload,
    },
    privateKey: session.sessionPrivKey,
  });

  const payload = {
    data: {
      transactions: [
        {
          method: signType,
          signingMessage: message,
          transactionId: transaction_id,
          userSessionSignature: sig
        }
      ],
      userData: {
        jobId: generateUUID(),
        sessionPk: session.sessionPubKey,
        userSWA: session.userSWA
      }
    }
  };
  return payload;
}
