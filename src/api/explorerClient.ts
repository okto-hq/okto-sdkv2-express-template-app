import axios, { isAxiosError } from "axios";
import { BASE_URL } from "../config/env";
import { SessionConfig } from "../types/sessionConfig";
import { generateAuthToken } from "../utils/generateAuthToken";

const getAccountURL: string = `${BASE_URL}/api/oc/v1/wallets`;
const getChainsURL: string = `${BASE_URL}/api/oc/v1/supported/networks`;
const getTokensURL: string = `${BASE_URL}/api/oc/v1/supported/tokens`;
const getPortfolioURL: string = `${BASE_URL}/api/oc/v1/aggregated-portfolio`;
const getPortfolioActivityURL: string = `${BASE_URL}/api/oc/v1/portfolio/activity`;
const getPortfolioNFTURL: string = `${BASE_URL}/api/oc/v1/portfolio/nft`;
const getOrderHistoryURL: string = `${BASE_URL}/api/oc/v1/orders`;
const getUserOperationGasPriceURL: string = `${BASE_URL}/api/oc/v1/gas-values`;
const readContractDataURL: string = `${BASE_URL}/api/oc/v1/readContractData`;

export const getAccount = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getAccountURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getChains = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getChainsURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getTokens = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getTokensURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getPortfolio = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getPortfolioURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getPortfolioActivity = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getPortfolioActivityURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getPortfolioNFT = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getPortfolioNFTURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getOrderHistory = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getOrderHistoryURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getUserOperationGasPrice = async (sessionConfig: SessionConfig) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await axios.get(getUserOperationGasPriceURL, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const readContractData = async (sessionConfig: SessionConfig, caip2id: string, data: any) => {
  const authToken = await generateAuthToken(sessionConfig);
  const headers = {
    Authorization: `Bearer ${authToken}`
  };
  const body = {
    caip2id: caip2id,
    data: data
  }
  try {
    const response = await axios.post(readContractDataURL, body, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }

}
