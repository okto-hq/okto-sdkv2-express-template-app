import * as explorerClient from '../api/explorerClient';
import { GetAccountResponse } from '../types/getAccount';
import { ErrorResponse } from '../types/error';
import { ChainResponse } from '../types/getChains';
import { TokenResponse } from '../types/getTokens';
import { PortfolioResponse } from '../types/getPortfolio';
import { PortfolioActivityResponse } from '../types/getPortfolioActivity';
import { PortfolioNFTResponse } from '../types/getPortfolioNFT';
import { OrderHistoryResponse } from '../types/getOrderHistory';

export const getAccount = async (token: string) => {
  const account: GetAccountResponse | ErrorResponse = await explorerClient.getAccount(token);
  return account;
}

export const getChains = async (token: string) => {
  const chains: ChainResponse | ErrorResponse = await explorerClient.getChains(token);
  return chains;
}

export const getTokens = async (token: string) => {
  const tokens: TokenResponse | ErrorResponse = await explorerClient.getTokens(token);
  return tokens;
}

export const getPortfolio = async (token: string) => {
  const portfolio: PortfolioResponse | ErrorResponse = await explorerClient.getPortfolio(token);
  return portfolio;
}

export const getPortfolioActivity = async (token: string) => {
  const portfolio: PortfolioActivityResponse | ErrorResponse = await explorerClient.getPortfolioActivity(token);
  return portfolio;
}

export const getPortfolioNFT = async (token: string) => {
  const portfolioNFT: PortfolioNFTResponse | ErrorResponse = await explorerClient.getPortfolioNFT(token);
  return portfolioNFT;
}

export const getOrderHistory = async (token: string) => {
  const orderHistory: OrderHistoryResponse | ErrorResponse = await explorerClient.getOrderHistory(token);
  return orderHistory;
}
