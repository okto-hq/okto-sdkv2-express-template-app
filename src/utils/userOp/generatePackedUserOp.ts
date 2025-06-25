import { pad, type Hash, concat } from "viem";
import type { UserOp, PackedUserOp } from "../../types/userOp";
/**
 * Creates the Packed UserOp (User Operation)
 *
 * This function packages various user operation parameters into a structured format.
 *
 * @param userOp - Object containing the user operation details.
 * @returns Formatted UserOp object with packed gas parameters
 * @throws Error if any required parameters are missing
 */
export function generatePackedUserOp(userOp: UserOp): PackedUserOp {
  if (
    !userOp.sender ||
    !userOp.nonce ||
    !userOp.callData ||
    !userOp.preVerificationGas ||
    !userOp.verificationGasLimit ||
    !userOp.callGasLimit ||
    !userOp.maxFeePerGas ||
    !userOp.maxPriorityFeePerGas ||
    userOp.paymaster == void 0 ||
    !userOp.paymasterVerificationGasLimit ||
    !userOp.paymasterPostOpGasLimit ||
    userOp.paymasterData == void 0
  ) {
    throw new Error("Invalid UserOp");
  }
  const accountGasLimits: Hash = ("0x" +
    pad(userOp.verificationGasLimit, {
      size: 16,
    }).replace("0x", "") +
    pad(userOp.callGasLimit, {
      size: 16,
    }).replace("0x", "")) as Hash;

  const gasFees: Hash = ("0x" +
    pad(userOp.maxFeePerGas, {
      size: 16,
    }).replace("0x", "") +
    pad(userOp.maxPriorityFeePerGas, {
      size: 16,
    }).replace("0x", "")) as Hash;

  const paymasterAndData = userOp.paymaster
    ? concat([
        userOp.paymaster,
        pad(userOp.paymasterVerificationGasLimit, {
          size: 16,
        }),
        pad(userOp.paymasterPostOpGasLimit, {
          size: 16,
        }),
        userOp.paymasterData,
      ])
    : "0x";

  const packedUserOp: PackedUserOp = {
    sender: userOp.sender,
    nonce: userOp.nonce,
    initCode: "0x",
    callData: userOp.callData,
    preVerificationGas: userOp.preVerificationGas,
    accountGasLimits,
    gasFees,
    paymasterAndData,
  };

  return packedUserOp;
}
