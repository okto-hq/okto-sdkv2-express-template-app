import { SessionConfig } from "./sessionConfig";

export interface AuthenticateResponse {
  status: string;
  data: {
    userSWA: string;
    nonce: string;
    clientSWA: string;
    sessionExpiry: number;
  };
  sessionConfig?: SessionConfig;
}
