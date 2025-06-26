import { Request, Response, NextFunction } from 'express';
import * as AuthService from '../services/authService';
import { Hex } from "viem";

export const requestOTPForEmail = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.body.email;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const otpData = await AuthService.requestEmailOtp(email, clientSWA, clientPK);
  res.json(otpData);
}

export const verifyOTPForEmail = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.body.email;
  const token: string = req.body.token;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const otp: string = req.body.otp;
  const verifyOTPData = await AuthService.verifyEmailOtp(email, token, otp, clientSWA, clientPK);
  res.json(verifyOTPData);
}
