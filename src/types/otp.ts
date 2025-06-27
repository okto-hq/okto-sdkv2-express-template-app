export interface SendOTPResponse {
  status: string;
  data: {
    status: string;
    message: string;
    code: number;
    token: string;
    trace_id: string;
  };
}

export interface VerifyOTPResponse {
  status: string;
  data: {
    auth_token: string;
    message: string;
    refresh_auth_token: string;
    device_token: string;
  };
}
