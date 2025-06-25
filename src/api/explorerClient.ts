import axios, { isAxiosError } from "axios";
import { BASE_URL } from "../config/env";

const getAccountURL: string = `${BASE_URL}/api/oc/v1/wallets`;
const getChainsURL: string = `${BASE_URL}/api/oc/v1/supported/networks`;
const getTokensURL: string = `${BASE_URL}/api/oc/v1/supported/tokens`;
const getPortfolioURL: string = `${BASE_URL}/api/oc/v1/aggregated-portfolio`;
const getPortfolioActivityURL: string = `${BASE_URL}/api/oc/v1/portfolio/activity`;
const getPortfolioNFTURL: string = `${BASE_URL}/api/oc/v1/portfolio/nft`;
const getOrderHistoryURL: string = `${BASE_URL}/api/oc/v1/orders`;
const getUserOperationGasPriceURL: string = `${BASE_URL}/api/oc/v1/gas-values`

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

export const getPortfolio = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getPortfolioURL, { headers })
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
}

export const getPortfolioActivity = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getPortfolioActivityURL, { headers })
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
}

export const getPortfolioNFT = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getPortfolioNFTURL, { headers })
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
}

export const getOrderHistory = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getOrderHistoryURL, { headers })
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
}

export const getUserOperationGasPrice = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  try {
    const response = await axios.get(getUserOperationGasPriceURL, { headers })

    console.log("getting userop gasprice: " , response.data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.message;
    }
  }
 
} 
