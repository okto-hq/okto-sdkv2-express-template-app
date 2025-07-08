import type { Hex } from "viem";
import { v4 as uuidv4 } from "uuid";
import * as intentClient from "../../api/intentClient";
import * as explorerClient from "../../api/explorerClient";
import { Constants } from "../../helper/constants";
import { UserOp } from "../../types/userOp";
import { NFTTransferData } from "../../types/nftTransferData";
import { SessionConfig } from "../../types/sessionConfig";
import { IntentExecuteResponse } from "../../types/intentExecute";
import { ErrorResponse } from "../../types/error";
import { generateNFTTransferCallData } from "../../utils/userOp/generateCallData";
import { generateUserOp } from "../../utils/userOp/generateUserOp";
import { signUserOp } from "../../utils/userOp/signUserOp";

export const nftTransfer = async (
  data: NFTTransferData,
  sessionConfig: SessionConfig,
  clientPK: Hex,
  clientSWA: Hex,
  feePayerAddress?: string
) => {
  // Generate nonce
  const nonce = uuidv4();

  // Feepayer address set to default if not provided
  if (!feePayerAddress) feePayerAddress = Constants.FEE_PAYER_ADDRESS;

  const callData: Hex = await generateNFTTransferCallData(nonce, data, feePayerAddress, sessionConfig, clientSWA);

  // Get gas price for txns
  const gasPrice = await explorerClient.getUserOperationGasPrice(sessionConfig);

  // Generate unsigned userOp
  const userOp: UserOp = await generateUserOp(nonce, sessionConfig, callData, gasPrice, clientSWA, clientPK);

  // Sign the userOp
  const signedUserOp: UserOp = await signUserOp(userOp, sessionConfig);

  // execute the userOp
  const jobId: IntentExecuteResponse | ErrorResponse = await intentClient.execute(sessionConfig, signedUserOp);

  return jobId;
}

const nftEstimate = async () => { }

const nftTransferExecuteAfterEstimate = async () => { }
