import {
  encodeAbiParameters,
  keccak256,
  pad,
  parseAbiParameters,
  hexToBigInt,
  type Hash,
} from "viem";
import { Constants } from "../../helper/constants";
import type { PackedUserOp } from "../../types/userOp";

/**
 * Generates the userOp Hash
 * Creates a unique hash that identifies the user operation.
 * This hash is used for signing purpose.
 *
 * @param userOp - Packed user operation object (output from generatePackedUserOp)
 * @returns The keccak256 hash of the user operation.
 */
export function generateUserOpHash(userOp: PackedUserOp): Hash {
  const pack = encodeAbiParameters(
    parseAbiParameters(
      "address, bytes32, bytes32, bytes32, bytes32, uint256, bytes32, bytes32"
    ),
    [
      userOp.sender,
      pad(userOp.nonce, {
        size: 32,
      }),
      pad(keccak256(userOp.initCode), {
        size: 32,
      }),
      pad(keccak256(userOp.callData), {
        size: 32,
      }),
      pad(userOp.accountGasLimits, {
        size: 32,
      }),
      hexToBigInt(userOp.preVerificationGas),
      pad(userOp.gasFees, {
        size: 32,
      }),
      pad(keccak256(userOp.paymasterAndData), {
        size: 32,
      }),
    ]
  );

  const userOpPack = encodeAbiParameters(
    parseAbiParameters("bytes32, address, uint256"),
    [
      keccak256(pack),
      Constants.getEnvConfig().ENTRYPOINT_CONTRACT_ADDRESS,
      BigInt(Constants.getEnvConfig().CHAIN_ID),
    ]
  );

  return keccak256(userOpPack);
}
