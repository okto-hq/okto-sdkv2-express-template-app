import { Request, Response, NextFunction } from "express";
import * as intentService from "../services/intentService";

export const tokenTransfer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken: string = req.headers.authorization?.split(" ")[1] || "";

  const { caip2Id, recipient, token, amount, feePayerAddress, sessionConfig } =
    req.body;

  console.log("request body: ", req.body);
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
    feePayerAddress
  );

  res.json(jobId);
};
