import * as intentClient from "../../api/intentClient";
import * as explorerClient from "../../api/explorerClient";
import { ErrorResponse } from "../../types/error";
import { SessionConfig } from "../../types/sessionConfig";
import { SignMessageResponse } from "../../types/SignMessage";
import { generateSignMessagePayload } from "../../utils/signMessage/generateSignMessagePayload";

export const signMessage = async (message: string, sessionConfig: SessionConfig) => {
  // Get user keys dynamically
  const userKeys = await explorerClient.getUserKeys(sessionConfig);

  // Generate signMessage payload
  const signPayload = await generateSignMessagePayload(userKeys, sessionConfig, message, "EIP191");

  // execute the userOp
  const signData: SignMessageResponse | ErrorResponse = await intentClient.signMessage(sessionConfig, signPayload);

  return signData;
};

export const signTypedData = async (data: string, sessionConfig: SessionConfig) => {
  // Get user keys dynamically
  const userKeys = await explorerClient.getUserKeys(sessionConfig);

  // Generate signMessage payload
  const signPayload = await generateSignMessagePayload(userKeys, sessionConfig, data, "EIP712");

  // execute the userOp
  const signData: SignMessageResponse | ErrorResponse = await intentClient.signMessage(sessionConfig, signPayload);

  return signData;
};
