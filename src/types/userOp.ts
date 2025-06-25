import { Address, Hex } from "viem";

export interface PackedUserOp {
  accountGasLimits: Hex;
  callData: Hex;
  initCode: Hex;
  gasFees: Hex;
  nonce: Hex;
  paymasterAndData: Hex;
  preVerificationGas: Hex;
  sender: Address;
  signature?: Hex;
}

export interface UserOp {
  callData?: Hex;
  callGasLimit?: Hex;
  factory?: Address | undefined;
  factoryData?: Hex | undefined;
  maxFeePerGas?: Hex;
  maxPriorityFeePerGas?: Hex;
  nonce?: Hex;
  paymaster?: Address | undefined;
  paymasterData?: Hex | undefined;
  paymasterPostOpGasLimit?: Hex | undefined;
  paymasterVerificationGasLimit?: Hex | undefined;
  preVerificationGas?: Hex;
  sender?: Address;
  signature?: Hex;
  verificationGasLimit?: Hex;
}
