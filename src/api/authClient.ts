import axios from "axios";
import { BASE_URL, CLIENT_SWA } from "../config/env";
import { generateClientSignature } from "../utils/crypto/generateClientSignature";
import { SendOTPResponse } from "../types/otp";

const authEmailUrl = `${BASE_URL}/api/oc/v1/authenticate/email`;

const post = async(url: string, headers: any, requestBody: any) => {
  try {
    const res = await axios.post(url, requestBody, { headers: headers })
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error (authClient):", error.response?.data);
    }
  }
}

export const requestOTP = async (email: string) => {
  const payload = {
    email: email,
    client_swa: CLIENT_SWA,
    timestamp: Date.now()
  }
  const clientSignature = await generateClientSignature(payload);
  const headers = {
    "Content-Type": "application/json"
  }
  const requestBody = {
    data: payload,
    client_signature: clientSignature,
    type: 'ethsign'
  }
  const resp: SendOTPResponse = await post(authEmailUrl, headers, requestBody);
  return resp;
}

export const verifyOTP = async (otp: string, token: string) => { }
