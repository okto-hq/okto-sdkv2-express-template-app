import axios, { isAxiosError } from "axios";
import { BASE_URL } from "../config/env";
import { IntentExecuteResponse } from "../types/intentExecute";
import { ErrorResponse } from "../types/error";

const executeURL: string = `${BASE_URL}/api/oc/v1/execute`;

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

export const execute = async (authToken: string, payload: any) => {
  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  };
  const resp: IntentExecuteResponse | ErrorResponse = await post(executeURL, headers, payload);
  return resp;
};
