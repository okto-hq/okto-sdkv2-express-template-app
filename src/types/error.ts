export interface ErrorResponse {
  status: string,
  error: {
    code: number,
    errorCode: string,
    message: string,
    traceId: string,
    data: string
  }
}
