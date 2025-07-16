import axios, { isAxiosError } from "axios";
import { BASE_URL } from "../config/env";
import { IntentExecuteResponse } from "../types/intentExecute";
import { ErrorResponse } from "../types/error";
import { IntentEstimateResponse } from "../types/intentEstimate";
import { SessionConfig } from "../types/sessionConfig";
import { generateAuthToken } from "../utils/auth/generateAuthToken";
import { SignMessageResponse } from "../types/SignMessage";

const estimateURL: string = `${BASE_URL}/api/oc/v1/estimate`;
const executeURL: string = `${BASE_URL}/api/oc/v1/execute`;
const signMessageURL: string = `${BASE_URL}/api/oc/v1/signMessage`;

const post = async (url: string, headers: any, requestBody: any) => {
  try {
    const res = await axios.post(url, requestBody, { headers: headers });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error (intentClient):", error.response?.data);
      return error.response?.data;
    }
  }
};

export const estimate = async (sessionConfig: SessionConfig, payload: any) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json"
  };
  const resp: IntentEstimateResponse | ErrorResponse = await post(estimateURL, headers, payload);
  return resp;
};

export const execute = async (sessionConfig: SessionConfig, payload: any) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json"
  };
  const resp: IntentExecuteResponse | ErrorResponse = await post(executeURL, headers, payload);
  return resp;
};

export const signMessage = async (sessionConfig: SessionConfig, payload: any) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json"
  };
  const resp: SignMessageResponse | ErrorResponse = await post(signMessageURL, headers, payload);
  return resp;
};
