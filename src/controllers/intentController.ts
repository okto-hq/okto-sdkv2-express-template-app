import { Request, Response, NextFunction } from "express";
import * as intentService from "../services/intents/intentService";
import { Hex } from "viem";
import { SessionConfig } from "../types/sessionConfig";
import { AptosRawTransactionData, EVMRawTransactionData, RawTransactionData } from "../types/rawTransactionData";
import { TokenTransferData } from "../types/tokenTransferData";

export const tokenTransfer = async (req: Request, res: Response, next: NextFunction) => {

  // extract authToken from header
  const authToken: string = req.headers.authorization?.split(" ")[1] || "";

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const recipient: string = req.body.recipient;
  const token: string = req.body.token;
  const amount: number = req.body.amount;
  const feePayerAddress: string = req.body.feePayerAddress as string;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;

  // data payload required for tokentransfer intent
  const data: TokenTransferData = { caip2Id, recipient, token, amount };

  // call tokentransfer function with required parameters
  const jobId = await intentService.tokenTransfer(authToken, data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(jobId);
};


export const rawTransaction = async (req: Request, res: Response, next: NextFunction) => {
  
  // extract authToken from header
  const authToken: string = req.headers.authorization?.split(" ")[1] || "";

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const transaction: EVMRawTransactionData | AptosRawTransactionData = req.body.transaction;
  const feePayerAddress: string = req.body.feePayerAddress as string;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;

  // data payload required for rawtransaction intent
  const data: RawTransactionData = { caip2Id, transaction };

  // call rawtransaction function with required parameters
  const jobId = await intentService.rawTransaction(authToken, data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(jobId);
};
