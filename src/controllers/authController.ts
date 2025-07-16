import { Request, Response, NextFunction } from "express";
import * as AuthService from "../services/authService";
import { Hex } from "viem";
import { ProviderType } from "../types/provider";
import { SendOTPResponse, VerifyOTPResponse } from "../types/otp";
import { ErrorResponse } from "../types/error";
import { AuthenticateResponse } from "../types/AuthenticateResponse";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

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
  const authData:  AuthenticateResponse | ErrorResponse = await AuthService.loginUsingOAuth(idToken, provider, clientSWA, clientPK);
  res.json(authData);
};

export const callbackTwitter = async (req: Request, res: Response, next: NextFunction) => {
  const { code } = req.body;

  try {
    const clientId = process.env.TWITTER_CLIENT_ID || "";
    const clientSecret = process.env.TWITTER_CLIENT_SECRET || "";
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "https://public-okto-react-sdk-template.vercel.app/auth/callback/twitter");
    params.append("code_verifier", "challenge");

    const tokenRes = await axios.post("https://api.twitter.com/2/oauth2/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`
      }
    });

    const { access_token } = tokenRes.data;

    res.json({ status: "success", data: { access_token } });
  } catch (err) {
    res.json({ status: "error", data: err });
  }
};

export const callbackApple = async (req: Request, res: Response, next: NextFunction) => {
  const { code } = req.body;

  try {
    const clientId = process.env.APPLE_CLIENT_ID || ""; 
    const clientSecret = process.env.APPLE_CLIENT_SECRET || ""; 

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "https://public-okto-react-sdk-template.vercel.app/auth/callback/apple");
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);

    const tokenRes = await axios.post("https://appleid.apple.com/auth/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const { access_token, id_token } = tokenRes.data;

    res.json({ status: "success", data: { access_token, id_token } });
  } catch (err) {
    res.json({ status: "error", data: err });
  }
};
