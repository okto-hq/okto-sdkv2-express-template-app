import { Request, Response, NextFunction } from "express";
import * as intentService from "../services/intents/intentService";
import { Hex } from "viem";
import { SessionConfig } from "../types/sessionConfig";
import { AptosRawTransactionData, EVMRawTransactionData, RawTransactionData } from "../types/rawTransactionData";
import { TokenTransferData } from "../types/tokenTransferData";
import { UserOp } from "../types/userOp";

export const tokenTransfer = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const recipient: string = req.body.recipient;
  const token: string = req.body.token;
  const amount: string = req.body.amount;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const feePayerAddress: string | undefined = req.body.feePayerAddress;

  // data payload required for tokentransfer intent
  const data: TokenTransferData = { caip2Id, recipient, token, amount };

  // call tokentransfer function with required parameters
  const jobId = await intentService.tokenTransfer(data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(jobId);
};

export const tokenTransferEstimate = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const recipient: string = req.body.recipient;
  const token: string = req.body.token;
  const amount: string = req.body.amount;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const feePayerAddress: string | undefined = req.body.feePayerAddress;

  // data payload required for tokentransfer intent
  const data: TokenTransferData = { caip2Id, recipient, token, amount };

  // call tokenTransferEstimate function with required parameters
  const estimateData = await intentService.tokenTransferEstimate(data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(estimateData);
};

export const tokenTransferExecuteAfterEstimate = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const userOp: UserOp = req.body.userOp;
  const sessionConfig: SessionConfig = req.body.sessionConfig;

  // call tokenTransferExecuteAfterEstimate function with required parameters
  const jobId = await intentService.tokenTransferExecuteAfterEstimate( userOp , sessionConfig );

  res.json(jobId);
};


export const rawTransaction = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const transaction: EVMRawTransactionData | AptosRawTransactionData = req.body.transaction;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const feePayerAddress: string | undefined = req.body.feePayerAddress;

  // data payload required for rawtransaction intent
  const data: RawTransactionData = { caip2Id, transaction };

  // call rawtransaction function with required parameters
  const jobId = await intentService.rawTransaction(data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(jobId);
};

export const rawTransactionEstimate = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const transaction: EVMRawTransactionData | AptosRawTransactionData = req.body.transaction;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const feePayerAddress: string | undefined = req.body.feePayerAddress;

  // data payload required for rawtransaction intent
  const data: RawTransactionData = { caip2Id, transaction };

  // call rawtransactionEstimate function with required parameters
  const estimateData = await intentService.rawTransactionEstimate(data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(estimateData);
};

export const rawTransactionExecuteAfterEstimate = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const userOp: UserOp = req.body.userOp;
  const sessionConfig: SessionConfig = req.body.sessionConfig;

  // call rawtransactionExecuteAfterEstimate function with required parameters
  const jobId = await intentService.rawTransactionExecuteAfterEstimate(userOp, sessionConfig);

  res.json(jobId);
}


