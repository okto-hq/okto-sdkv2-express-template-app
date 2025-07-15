import { GetUserKeysResponse } from "./getUserKeys";
import { SessionConfig } from "./sessionConfig";

export interface SignMessageResponse {
  status: string;
  data: {
    signature: string;
  };
}

export interface SignMessageClient {
  _userKeys: GetUserKeysResponse;
  _sessionConfig: SessionConfig;
}
