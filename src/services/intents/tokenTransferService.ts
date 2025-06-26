import { Hex } from "viem";
import { v4 as uuidv4 } from "uuid";
import * as intentClient from "../../api/intentClient";
import * as explorerClient from "../../api/explorerClient";
import { Constants } from "../../helper/constants";
import { signUserOp } from "../../utils/userOp/signUserOp";
import { generateUserOp } from "../../utils/userOp/generateUserOp";
import { generateTokenTransferCallData } from "../../utils/userOp/generateCallData";
import { TokenTransferData } from "../../types/tokenTransferData";
import { IntentExecuteResponse } from "../../types/intentExecute";
import { ErrorResponse } from "../../types/error";
import { SessionConfig } from "../../types/sessionConfig";
import { UserOp } from "../../types/userOp";

export const tokenTransfer = async (
  authToken: string,
  data: TokenTransferData,
  sessionConfig: SessionConfig,
  clientSWA: Hex,
  clientPK: Hex,
  feePayerAddress?: string
) => {
  // Generate nonce
  const nonce = uuidv4();

  // Feepayer address set to default if not provided
  if (!feePayerAddress) feePayerAddress = Constants.FEE_PAYER_ADDRESS;

  // Get gas price for txns 
  const gasPrice = await explorerClient.getUserOperationGasPrice(authToken);

  // Generate calldata
  const callData: Hex = await generateTokenTransferCallData(nonce , data , feePayerAddress , sessionConfig , clientSWA , authToken )

  // Generate unsigned userOp
  const userOp: UserOp = await generateUserOp( nonce , sessionConfig , callData , gasPrice , clientSWA , clientPK );

  // Sign the userOp
  const signedUserOp: UserOp = await signUserOp(userOp, sessionConfig);

  // execute the userOp 
  const jobId: IntentExecuteResponse | ErrorResponse = await intentClient.execute(authToken, signedUserOp);

  return jobId;
};
