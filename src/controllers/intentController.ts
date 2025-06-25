import { Request, Response, NextFunction } from "express";
import * as intentService from "../services/intentService";

export const tokenTransfer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken: string = req.headers.authorization?.split(" ")[1] || "";

  const {
    caip2Id,
    recipient,
    token,
    amount,
    feePayerAddress,
    sessionConfig,
    clientSWA,
    clientPrivateKey,
  } = req.body;

  const data = {
    caip2Id,
    recipient,
    token,
    amount,
  };

  const jobId = await intentService.tokenTransfer(
    authToken,
    data,
    sessionConfig,
    clientSWA,
    clientPrivateKey,
    feePayerAddress
  );

  res.json(jobId);
};

export const rawTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken: string = req.headers.authorization?.split(" ")[1] || "";

  const {
    caip2Id,
    transaction,
    feePayerAddress,
    sessionConfig,
    clientSWA,
    clientPrivateKey,
  } = req.body;

  const data = {
    caip2Id,
    transaction,
  };

  const jobId = await intentService.rawTransaction(
    authToken,
    data,
    sessionConfig,
    clientSWA,
    clientPrivateKey,
    feePayerAddress
  );

  res.json(jobId);
};
