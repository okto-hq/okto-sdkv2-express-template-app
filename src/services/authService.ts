import { SendOTPResponse, VerifyOTPResponse } from "../types/otp";
import * as authClient from "../api/authClient";
import { ErrorResponse } from "../types/error";
import { generateClientSignature } from "../utils/crypto/generateClientSignature";
import { Hex } from "viem";
import { ProviderType } from "../types/provider";
import { SessionKey } from "../utils/auth/sessionKey";
import { generateAuthPayload } from "../utils/auth/generateAuthPayload";
import { AuthenticateResponse } from "../types/AuthenticateResponse";
import { SessionConfig } from "../types/sessionConfig";

export const requestEmailOtp = async (email: string, clientSWA: Hex, clientPK: Hex) => {
  const payload = {
    email: email,
    client_swa: clientSWA,
    timestamp: Date.now()
  };
  const clientSignature: string = await generateClientSignature(clientPK, payload);
  const requestBody = {
    data: payload,
    client_signature: clientSignature,
    type: "ethsign"
  };
  const otpData: SendOTPResponse | ErrorResponse = await authClient.requestEmailOTP(requestBody);
  return otpData;
};

export const verifyEmailOtp = async (email: string, token: string, otp: string, clientSWA: Hex, clientPK: Hex) => {
  const payload = {
    email: email,
    token: token,
    otp: otp,
    client_swa: clientSWA,
    timestamp: Date.now()
  };
  const clientSignature: string = await generateClientSignature(clientPK, payload);
  const requestBody = {
    data: payload,
    client_signature: clientSignature,
    type: "ethsign"
  };
  const otpData: VerifyOTPResponse | ErrorResponse = await authClient.verifyEmailOTP(requestBody);
  return otpData;
};

export const requestWhatsappOtp = async (whatsapp_number: string, country_short_name: string, clientSWA: Hex, clientPK: Hex) => {
  const payload = {
    whatsapp_number: whatsapp_number,
    country_short_name: country_short_name,
    client_swa: clientSWA,
    timestamp: Date.now()
  };
  const clientSignature: string = await generateClientSignature(clientPK, payload);
  const requestBody = {
    data: payload,
    client_signature: clientSignature,
    type: "ethsign"
  };
  const otpData: SendOTPResponse | ErrorResponse = await authClient.requestWhatsappOTP(requestBody);
  return otpData;
};

export const verifyWhatsappOtp = async (whatsapp_number: string, country_short_name: string, token: string, otp: string, clientSWA: Hex, clientPK: Hex) => {
  const payload = {
    whatsapp_number: whatsapp_number,
    country_short_name: country_short_name,
    token: token,
    otp: otp,
    client_swa: clientSWA,
    timestamp: Date.now()
  };
  const clientSignature: string = await generateClientSignature(clientPK, payload);
  const requestBody = {
    data: payload,
    client_signature: clientSignature,
    type: "ethsign"
  };
  const otpData: VerifyOTPResponse | ErrorResponse = await authClient.verifyWhatsappOTP(requestBody);
  return otpData;
};

export const loginUsingOAuth = async (idToken: string, provider: ProviderType, clientSWA: Hex, clientPK: Hex) => {
  const data = { idToken: idToken, provider: provider };

  // generate sessionKeys for the user
  const session = SessionKey.create();

  // generate auth payload
  const requestBody = await generateAuthPayload(data, session, clientSWA, clientPK);

  // call the authenticate endpoint to register the session
  const authenticateData: AuthenticateResponse | ErrorResponse = await authClient.authenticate(requestBody);

  // construct sessionConfig object 
  const sessionConfig: SessionConfig = {
    sessionPrivKey: session.privateKeyHexWith0x as Hex,
    sessionPubKey: session.uncompressedPublicKeyHexWith0x as Hex,
    userSWA: "data" in authenticateData ? authenticateData.data.userSWA : ""
  };

  return { authenticateData, sessionConfig };
};
