export interface SendEmailOTPResponse {
  status: string;
  data: {
    status?: string;
    message?: string;
    code?: number;
    token?: string;
    trace_id?: string;
  };
}


export interface VerifyEmailOTPResponse {
  status: string;
  data: {
    auth_token?: string;
    message?: string;
    refresh_auth_token?: string;
    device_token?: string;
  };
}
