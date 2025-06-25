import { generatePackedUserOp } from "./generatePackedUserOp";
import { generateUserOpHash } from "./generateUserOpHash";
import { signMessage } from "viem/accounts";
import { fromHex } from "viem";
import { SessionConfig } from "../../types/sessionConfig";

export async function signUserOp(userop: any, sessionConfig: SessionConfig) {
  const privateKey = sessionConfig.sessionPrivKey as `0x${string}`;
  const packeduserop = generatePackedUserOp(userop);
  const hash = generateUserOpHash(packeduserop);
  const sig = await signMessage({
    message: {
      raw: fromHex(hash, "bytes"),
    },
    privateKey,
  });
  userop.signature = sig;
  return userop;
}
