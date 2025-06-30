import axios from "axios";
import { BASE_URL } from "../config/env";
import { SendOTPResponse, VerifyOTPResponse } from "../types/otp";
import { ErrorResponse } from "../types/error";
import { AuthenticateResponse } from "../types/AuthenticateResponse";

const sendEmailOTPURL: string = `${BASE_URL}/api/oc/v1/authenticate/email`;
const verifyEmailOTPURL: string = `${BASE_URL}/api/oc/v1/authenticate/email/verify`;
const sendWhatsappOTPURL: string = `${BASE_URL}/api/oc/v1/authenticate/whatsapp`;
const verifyWhatsappOTPURL: string = `${BASE_URL}/api/oc/v1/authenticate/whatsapp/verify`;
const authenticateURL: string = `${BASE_URL}/api/oc/v1/authenticate`;

const post = async (url: string, requestBody: any) => {
  try {
    const res = await axios.post(url, requestBody);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error (authClient):", error.response?.data);
      return error.response?.data;
    }
  }
};

export const requestEmailOTP = async (requestBody: any) => {
  const response: SendOTPResponse | ErrorResponse = await post(sendEmailOTPURL, requestBody);
  return response;
};

export const verifyEmailOTP = async (requestBody: any) => {
  const response: VerifyOTPResponse | ErrorResponse = await post(verifyEmailOTPURL, requestBody);
  return response;
};

export const requestWhatsappOTP = async (requestBody: any) => {
  const response: SendOTPResponse | ErrorResponse = await post(sendWhatsappOTPURL, requestBody);
  return response;
};

export const verifyWhatsappOTP = async (requestBody: any) => {
  const response: VerifyOTPResponse | ErrorResponse = await post(verifyWhatsappOTPURL, requestBody);
  return response;
};

export const authenticate = async (requestBody: any) => {
  const response: AuthenticateResponse | ErrorResponse = await post(authenticateURL, requestBody);
  return response;
};
