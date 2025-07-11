import { Hex, toHex } from "viem";
import { nonceToBigInt } from "../../helper/nonceToBigInt";
import { SessionConfig } from "../../types/sessionConfig";
import { Constants } from "../../helper/constants";
import { generatePaymasterData } from "./generatePaymasterData";

export async function generateUserOp(
  nonce: string,
  sessionConfig: SessionConfig,
  callData: Hex,
  gasPrice: any,
  clientSWA: Hex,
  clientPK: Hex
) {
  const userOp = {
    sender: sessionConfig.userSWA as Hex,
    nonce: toHex(nonceToBigInt(nonce), { size: 32 }),
    paymaster: Constants.getEnvConfig().PAYMASTER_ADDRESS, //paymaster address
    callGasLimit: toHex(Constants.GAS_LIMITS.CALL_GAS_LIMIT),
    verificationGasLimit: toHex(Constants.GAS_LIMITS.VERIFICATION_GAS_LIMIT),
    preVerificationGas: toHex(Constants.GAS_LIMITS.PRE_VERIFICATION_GAS),
    maxFeePerGas: gasPrice.data.maxFeePerGas,
    maxPriorityFeePerGas: gasPrice.data.maxPriorityFeePerGas,
    paymasterPostOpGasLimit: toHex(
      Constants.GAS_LIMITS.PAYMASTER_POST_OP_GAS_LIMIT
    ),
    paymasterVerificationGasLimit: toHex(
      Constants.GAS_LIMITS.PAYMASTER_VERIFICATION_GAS_LIMIT
    ),
    callData: callData,
    paymasterData: await generatePaymasterData(
      nonce,
      clientSWA,
      clientPK,
      new Date(Date.now() + 6 * Constants.HOURS_IN_MS),
    ),
  };

  return userOp;
}
