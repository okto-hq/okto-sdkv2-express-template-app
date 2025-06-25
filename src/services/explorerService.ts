import * as explorerClient from '../api/explorerClient';
import { GetAccountResponse } from '../types/getAccount';
import { ErrorResponse } from '../types/error';
import { ChainResponse } from '../types/getChains';
import { TokenResponse } from '../types/getTokens';

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
