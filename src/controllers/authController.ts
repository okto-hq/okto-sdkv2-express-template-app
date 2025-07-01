import { Request, Response, NextFunction } from "express";
import * as AuthService from "../services/authService";
import { Hex } from "viem";
import { ProviderType } from "../types/provider";
import { SendOTPResponse, VerifyOTPResponse } from "../types/otp";
import { ErrorResponse } from "../types/error";
import { SessionConfig } from "../types/sessionConfig";
import { AuthenticateResponse } from "../types/AuthenticateResponse";

export const requestOTPForEmail = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.body.email;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const otpData: SendOTPResponse | ErrorResponse = await AuthService.requestEmailOtp(email, clientSWA, clientPK);
  res.json(otpData);
};

export const verifyOTPForEmail = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.body.email;
  const token: string = req.body.token;
  const otp: string = req.body.otp;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const verifyOTPData: VerifyOTPResponse | ErrorResponse = await AuthService.verifyEmailOtp(email, token, otp, clientSWA, clientPK);
  res.json(verifyOTPData);
};

export const requestOTPForWhatsapp = async (req: Request, res: Response, next: NextFunction) => {
  const whatsapp_number: string = req.body.whatsapp_number;
  const country_short_name: string = req.body.country_short_name;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const otpData: SendOTPResponse | ErrorResponse = await AuthService.requestWhatsappOtp(
    whatsapp_number,
    country_short_name,
    clientSWA,
    clientPK
  );
  res.json(otpData);
};

export const verifyOTPForWhatsapp = async (req: Request, res: Response, next: NextFunction) => {
  const whatsapp_number: string = req.body.whatsapp_number;
  const country_short_name: string = req.body.country_short_name;
  const token: string = req.body.token;
  const otp: string = req.body.otp;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const verifyOTPData: VerifyOTPResponse | ErrorResponse = await AuthService.verifyWhatsappOtp(
    whatsapp_number,
    country_short_name,
    token,
    otp,
    clientSWA,
    clientPK
  );
  res.json(verifyOTPData);
};

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const idToken: string = req.body.idToken;
  const provider: ProviderType = req.body.provider;
  const clientSWA: Hex = req.body.client_swa as Hex;
  const clientPK: Hex = req.body.client_pk as Hex;
  const authData: {
    authenticateData: AuthenticateResponse | ErrorResponse;
    sessionConfig: SessionConfig;
  } = await AuthService.loginUsingOAuth(idToken, provider, clientSWA, clientPK);
  res.json({status: "success", data: authData});
};
