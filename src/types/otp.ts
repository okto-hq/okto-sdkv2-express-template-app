export interface SendOTPResponse {
  status: number,
  message: string,
  code: number,
  token: string,
  trace_id: string
}
