import { v4 as uuidv4 } from "uuid";
import { encodeAbiParameters, keccak256, parseAbiParameters, toBytes, type Hash, type Hex } from "viem";
import { signMessage } from "viem/accounts";
import { generatePaymasterData } from "../userOp/generatePaymasterData";
import { Constants } from "../../helper/constants";

export async function generateAuthPayload(authData: any, sessionKey: any, clientSWA: Hex, clientPK: Hex) {
  // STEP 1: Generate a unique UUID-based nonce
  const nonce = uuidv4();
  // STEP 2: Construct a UserOp authenticate payload
  const payload: any = {};
  payload.authData = authData;
  payload.sessionData = {};
  payload.sessionData.nonce = nonce;
  payload.sessionData.clientSWA = clientSWA;
  payload.sessionData.sessionPk = sessionKey.uncompressedPublicKeyHexWith0x;
  payload.sessionData.maxPriorityFeePerGas = "0xBA43B7400"; // constant on okto chain
  payload.sessionData.maxFeePerGas = "0xBA43B7400"; // constant on okto chain
  payload.sessionData.paymaster = Constants.getEnvConfig().PAYMASTER_ADDRESS; // okto testnet paymaster address
  payload.sessionData.paymasterData = await generatePaymasterData(
    nonce,
    clientSWA,
    clientPK,
    new Date(Date.now() + 6 * Constants.HOURS_IN_MS), // hours in milliseconds
    0
  );

  // STEP 3: Create a message, sign it and add signatures to the user op. The message is signed using the client's private key and session private key to symbolize both the user and client signatures
  const message = {
    raw: toBytes(keccak256(encodeAbiParameters(parseAbiParameters("address"), [sessionKey.ethereumAddress])))
  };
  payload.sessionPkClientSignature = await signMessage({
    message,
    privateKey: clientPK
  });
  payload.sessionDataUserSignature = await signMessage({
    message,
    privateKey: sessionKey.privateKeyHexWith0x
  });

  return payload;
}
