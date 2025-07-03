import { Request, Response, NextFunction } from "express";
import * as explorerService from "../services/explorerService";
import { SessionConfig } from "../types/sessionConfig";

export const account = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const account = await explorerService.getAccount(sessionConfig);
  res.json(account);
};

export const chains = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const chains = await explorerService.getChains(sessionConfig);
  res.json(chains);
};

export const tokens = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const tokens = await explorerService.getTokens(sessionConfig);
  res.json(tokens);
};

export const portfolio = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const portfolio = await explorerService.getPortfolio(sessionConfig);
  res.json(portfolio);
};

export const portfolioActivity = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const portfolio = await explorerService.getPortfolioActivity(sessionConfig);
  res.json(portfolio);
};

export const portfolioNFT = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const portfolioNFT = await explorerService.getPortfolioNFT(sessionConfig);
  res.json(portfolioNFT);
};

export const orderHistory = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const orderHistory = await explorerService.getOrderHistory(sessionConfig);
  res.json(orderHistory);
};

export const readContractData = async (req: Request, res: Response, next: NextFunction) => {
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const caip2Id: string = req.body.caip2Id;
  const data: any = req.body.data;
  const contractData = await explorerService.readContractData(sessionConfig, caip2Id, data);
  res.json(contractData);
};
