import { Request, Response, NextFunction } from "express";
import * as intentService from "../services/intents/intentService";
import type { Hex } from "viem";
import { SessionConfig } from "../types/sessionConfig";
import { AptosRawTransactionData, EVMRawTransactionData, RawTransactionData } from "../types/rawTransactionData";
import { TokenTransferData } from "../types/tokenTransferData";
import { UserOp } from "../types/userOp";
import { NFTTransferData } from "../types/nftTransferData";

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

export const tokenTransferUserOp = async (req: Request, res: Response, next: NextFunction) => {

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
  const userOp = await intentService.tokenTransferUserOp(data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(userOp);
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

  // call TokenTransferExecuteAfterEstimate function with required parameters
  const jobId = await intentService.tokenTransferExecuteAfterEstimate( userOp , sessionConfig );

  res.json(jobId);
};

export const nftTransfer = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const collectionAddress: string = req.body.collectionAddress;
  const nftId: string = req.body.nftId;
  const recipientWalletAddress: Hex = req.body.recipientWalletAddress;
  const amount: number = req.body.amount;
  const nftType: string = req.body.nftType;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const feePayerAddress: string | undefined = req.body.feePayerAddress;

  // data payload required for nftTransfer intent
  const data: NFTTransferData = { caip2Id, collectionAddress, nftId, recipientWalletAddress, amount, nftType };

  // call nftTransfer function with required parameters
  const jobId = await intentService.nftTransfer(data, sessionConfig, clientPK, clientSWA, feePayerAddress);

  res.json(jobId);
};

export const nftTransferUserOp = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const collectionAddress: string = req.body.collectionAddress;
  const nftId: string = req.body.nftId;
  const recipientWalletAddress: Hex = req.body.recipientWalletAddress;
  const amount: number = req.body.amount;
  const nftType: string = req.body.nftType;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const feePayerAddress: string | undefined = req.body.feePayerAddress;

  // data payload required for nftTransfer intent
  const data: NFTTransferData = { caip2Id, collectionAddress, nftId, recipientWalletAddress, amount, nftType };

  // call nftTransfer function with required parameters
  const userOp = await intentService.nftTransferUserOp(data, sessionConfig, clientPK, clientSWA, feePayerAddress);

  res.json(userOp);
};

export const nftTransferEstimate = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const caip2Id: string = req.body.caip2Id;
  const collectionAddress: string = req.body.collectionAddress;
  const nftId: string = req.body.nftId;
  const recipientWalletAddress: string = req.body.recipientWalletAddress;
  const amount: number | bigint = req.body.amount;
  const nftType: string = req.body.nftType;
  const sessionConfig: SessionConfig = req.body.sessionConfig;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const feePayerAddress: string | undefined = req.body.feePayerAddress;

  // data payload required for nfttransfer intent
  const data: NFTTransferData = { caip2Id, collectionAddress, nftId, recipientWalletAddress, amount ,nftType };

  // call nftTransferEstimate function with required parameters
  const estimateData = await intentService.nftTransferEstimate(data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(estimateData);
};

export const nftTransferExecuteAfterEstimate = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const userOp: UserOp = req.body.userOp;
  const sessionConfig: SessionConfig = req.body.sessionConfig;

  // call nftTransferExecuteAfterEstimate function with required parameters
  const jobId = await intentService.nftTransferExecuteAfterEstimate( userOp , sessionConfig );

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

export const rawTransactionUserOp = async (req: Request, res: Response, next: NextFunction) => {

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
  const userOp = await intentService.rawTransactionUserOp(data, sessionConfig, clientSWA, clientPK, feePayerAddress);

  res.json(userOp);
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

export const signUserOp = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const userOp: UserOp = req.body.userOp;
  const sessionConfig: SessionConfig = req.body.sessionConfig;

  // call signUserOp function with required parameters
  const signedUserOp = await intentService.signUserOp(userOp, sessionConfig);

  res.json(signedUserOp);
}

export const executeUserOp = async (req: Request, res: Response, next: NextFunction) => {

  // extract parameters from request body
  const userOp: UserOp = req.body.userOp;
  const sessionConfig: SessionConfig = req.body.sessionConfig;

  // call executeUserOp function with required parameters
  const jobId = await intentService.executeUserOp(userOp, sessionConfig);

  res.json(jobId);
}

export const signMessage =  async (req: Request, res: Response, next: NextFunction) => {

   // extract parameters from request body
   const message: string = req.body.message;
   const sessionConfig: SessionConfig = req.body.sessionConfig;

   const signData = await intentService.signMessage(message, sessionConfig);

   res.json(signData);
}

export const signTypedData =  async (req: Request, res: Response, next: NextFunction) => {

   // extract parameters from request body
   const data: string = req.body.data;
   const sessionConfig: SessionConfig = req.body.sessionConfig;

   const signData = await intentService.signMessage(data, sessionConfig);

   res.json(signData);
}
