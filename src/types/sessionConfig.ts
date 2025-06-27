import { Hex } from "viem";

export interface SessionConfig {
  sessionPrivKey: Hex;
  sessionPubKey: Hex;
  userSWA: string;
}
