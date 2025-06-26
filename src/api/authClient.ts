import axios from "axios";
import { BASE_URL } from "../config/env";
import { SendEmailOTPResponse, VerifyEmailOTPResponse } from "../types/otp";
import { ErrorResponse } from "../types/error";

const sendEmailOTPURL: string = `${BASE_URL}/api/oc/v1/authenticate/email`;
const verifyEmailOTPURL: string = `${BASE_URL}/api/oc/v1/authenticate/email/verify`;
const authenticateURL: string = `${BASE_URL}/api/oc/v1/authenticate`;

const post = async(url: string, requestBody: any) => {
  try {
    const res = await axios.post(url, requestBody)
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error (authClient):", error.response?.data);
      return error.response?.data;
    }
  }
}

export const requestOTP = async (requestBody: any) => {
  const response: SendEmailOTPResponse | ErrorResponse = await post(sendEmailOTPURL, requestBody);
  return response;
}

export const verifyOTP = async (requestBody: any) => {
  const response: VerifyEmailOTPResponse | ErrorResponse = await post(verifyEmailOTPURL, requestBody);
  return response;
}
