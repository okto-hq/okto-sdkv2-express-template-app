import axios, { isAxiosError } from "axios";
import { BASE_URL } from "../config/env";

const getAccountURL: string = `${BASE_URL}/api/oc/v1/wallets`;
const getChainsURL: string = `${BASE_URL}/api/oc/v1/supported/networks`;
const getTokensURL: string = `${BASE_URL}/api/oc/v1/supported/tokens`;

export const getAccount = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getAccountURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
}

export const getChains = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getChainsURL, { headers })
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
}

export const getTokens = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getTokensURL, { headers })
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
}
