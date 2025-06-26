import { SendEmailOTPResponse } from '../types/otp';
import { requestOTP, verifyOTP } from '../api/authClient'
import { ErrorResponse } from '../types/error';
import { generateClientSignature } from '../utils/crypto/generateClientSignature';
import { Hex } from 'viem';

export const requestEmailOtp = async (email: string, clientSWA: Hex, clientPK: Hex) => {
  const payload = {
    email: email,
    client_swa: clientSWA,
    timestamp: Date.now()
  }
  const clientSignature = await generateClientSignature(clientPK, payload);
  const requestBody = {
    data: payload,
    client_signature: clientSignature,
    type: 'ethsign'
  }
  const otpData: SendEmailOTPResponse | ErrorResponse = await requestOTP(requestBody);
  return otpData;
}

export const verifyEmailOtp = async (email: string, token: string, otp: string, clientSWA: Hex, clientPK: Hex) => {
  const payload = {
    email: email,
    token: token,
    otp: otp,
    client_swa: clientSWA,
    timestamp: Date.now()
  }
  const clientSignature = await generateClientSignature(clientPK, payload);
  const requestBody = {
    data: payload,
    client_signature: clientSignature,
    type: 'ethsign'
  }
  const otpData: SendEmailOTPResponse | ErrorResponse = await verifyOTP(requestBody);
  return otpData;
}
