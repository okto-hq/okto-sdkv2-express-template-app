import { Hex, toHex } from "viem";
import { Constants } from "../../helper/constants";
import { generatePaymasterData } from "./generatePaymasterData";

export type IntentType = "TOKEN_TRANSFER" | "RAW_TRANSACTION" | "NFT_TRANSFER";

export async function generateEstimatePayload(intentType: IntentType, nonce: string, data: any, clientSWA: Hex, clientPK: Hex, feePayerAddress?: string) {
  let details;

  if (intentType == "TOKEN_TRANSFER") {
    details = {
      recipientWalletAddress: data.recipient,
      caip2Id: data.caip2Id,
      tokenAddress: data.token,
      amount: data.amount
    };
  }

  if (intentType == "RAW_TRANSACTION") {
    details = {
      caip2Id: data.caip2Id,
      transactions: [data.transaction]
    };
  }

  const estimateUserOpPayload: any = {
    type: intentType,
    jobId: nonce,
    paymasterData: await generatePaymasterData(
      nonce,
      clientSWA,
      clientPK,
      new Date(Date.now() + 6 * Constants.HOURS_IN_MS),
    ),
    gasDetails: {
      maxFeePerGas: toHex(Constants.GAS_LIMITS.MAX_FEE_PER_GAS),
      maxPriorityFeePerGas: toHex(Constants.GAS_LIMITS.MAX_PRIORITY_FEE_PER_GAS)
    },
    details: details
  };

  if(feePayerAddress) estimateUserOpPayload.feePayerAddress = feePayerAddress;

  return estimateUserOpPayload;
}
