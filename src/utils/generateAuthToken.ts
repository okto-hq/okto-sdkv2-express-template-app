import { signMessage } from "viem/accounts";
import { SessionConfig } from "../types/sessionConfig";
import { Hex } from "viem";

/**
 * Creates the Okto Auth Token
 * 
 * This function is used to create the Okto Auth Token after successfull authentication
 * 
 * @param sessionConfig - Object containing session authentication details:
 *   - sessionPrivKey: The private key of the current session
 *   - sessionPubKey: The public key corresponding to the session private key
 * 
 * @returns Base64 encoded authorization token 
 * @throws Error if session keys are not provided in the configuration
 */

export async function generateAuthToken(sessionConfig: SessionConfig) {
    const sessionPriv = sessionConfig?.sessionPrivKey as Hex;
    const sessionPub = sessionConfig?.sessionPubKey as Hex;
    if (sessionPriv === void 0 || sessionPub === void 0) {
        throw new Error("Session keys are not set");
    }
    const data = {
        expire_at: Math.round(Date.now() / 1e3) + 60 * 90,
        session_pub_key: sessionPub,
    };

    // Okto auth token is nothing but the session public key encrypted with the session private key
    const payload = {
        type: "ecdsa_uncompressed",
        data,
        data_signature: await signMessage({
            message: JSON.stringify(data),
            privateKey: sessionPriv,
        }),
    };
    return btoa(JSON.stringify(payload));
}