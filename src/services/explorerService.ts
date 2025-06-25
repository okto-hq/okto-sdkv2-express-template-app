import * as explorerClient from '../api/explorerClient';
import { GetAccountResponse } from '../types/getAccount';
import { ErrorResponse } from '../types/error';

export const getAccount = async (token: string) => {
  const account: GetAccountResponse | ErrorResponse = await explorerClient.getAccount(token);
  return account;
}
