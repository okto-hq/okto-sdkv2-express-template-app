import * as explorerClient from '../api/explorerClient';
import { GetAccountResponse } from '../types/getAccount';
import { ErrorResponse } from '../types/error';
import { ChainResponse } from '../types/getChains';
import { TokenResponse } from '../types/getTokens';
import { PortfolioResponse } from '../types/getPortfolio';
import { PortfolioActivityResponse } from '../types/getPortfolioActivity';
import { PortfolioNFTResponse } from '../types/getPortfolioNFT';
import { OrderHistoryResponse } from '../types/getOrderHistory';
import { ContractDataResponse } from '../types/readContractData';
import { SessionConfig } from '../types/sessionConfig';

export const getAccount = async (sessionConfig: SessionConfig) => {
  const account: GetAccountResponse | ErrorResponse = await explorerClient.getAccount(sessionConfig);
  return account;
}

export const getChains = async (sessionConfig: SessionConfig) => {
  const chains: ChainResponse | ErrorResponse = await explorerClient.getChains(sessionConfig);
  return chains;
}

export const getTokens = async (sessionConfig: SessionConfig) => {
  const tokens: TokenResponse | ErrorResponse = await explorerClient.getTokens(sessionConfig);
  return tokens;
}

export const getPortfolio = async (sessionConfig: SessionConfig) => {
  const portfolio: PortfolioResponse | ErrorResponse = await explorerClient.getPortfolio(sessionConfig);
  return portfolio;
}

export const getPortfolioActivity = async (sessionConfig: SessionConfig) => {
  const portfolio: PortfolioActivityResponse | ErrorResponse = await explorerClient.getPortfolioActivity(sessionConfig);
  return portfolio;
}

export const getPortfolioNFT = async (sessionConfig: SessionConfig) => {
  const portfolioNFT: PortfolioNFTResponse | ErrorResponse = await explorerClient.getPortfolioNFT(sessionConfig);
  return portfolioNFT;
}

export const getOrderHistory = async (sessionConfig: SessionConfig) => {
  const orderHistory: OrderHistoryResponse | ErrorResponse = await explorerClient.getOrderHistory(sessionConfig);
  return orderHistory;
}

export const readContractData = async (sessionConfig: SessionConfig, caip2id: string, data: any) => {
  const contractData: ContractDataResponse | ErrorResponse = await explorerClient.readContractData(sessionConfig, caip2id, data);
  return contractData;
}
