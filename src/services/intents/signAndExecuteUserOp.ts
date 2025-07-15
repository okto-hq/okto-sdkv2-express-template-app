import { signUserOp as signUserOpUtil } from "../../utils/userOp/signUserOp";
import { SessionConfig } from "../../types/sessionConfig";
import * as intentClient from "../../api/intentClient";
import { UserOp } from "../../types/userOp";
import { IntentExecuteResponse } from "../../types/intentExecute";
import { ErrorResponse } from "../../types/error";

export const signUserOp = async (userOp: UserOp, sessionConfig: SessionConfig) => {
  // Sign the userOp
  const signedUserOp: UserOp = await signUserOpUtil(userOp, sessionConfig);

  return signedUserOp;
};

export const executeUserOp = async (signedUserOp: UserOp, sessionConfig: SessionConfig) => {
  // execute the userOp
  const jobId: IntentExecuteResponse | ErrorResponse = await intentClient.execute(sessionConfig, signedUserOp);

  return jobId;
};
