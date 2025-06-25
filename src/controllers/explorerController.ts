import { Request, Response, NextFunction } from 'express';
import * as explorerService from '../services/explorerService';

export const account = async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(' ')[1] || '';
  const account = await explorerService.getAccount(token);
  res.json(account);
}

export const chains = async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(' ')[1] || '';
  const chains = await explorerService.getChains(token);
  res.json(chains);
}
