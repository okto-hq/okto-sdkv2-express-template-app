import * as explorerClient from '../api/explorerClient';
import { GetAccountResponse } from '../types/getAccount';
import { ErrorResponse } from '../types/error';
import { GetChainResponse } from '../types/getChains';

export const getAccount = async (token: string) => {
  const account: GetAccountResponse | ErrorResponse = await explorerClient.getAccount(token);
  return account;
}

export const getChains = async (token: string) => {
  const chains: GetChainResponse | ErrorResponse = await explorerClient.getChains(token);
  return chains;
}
