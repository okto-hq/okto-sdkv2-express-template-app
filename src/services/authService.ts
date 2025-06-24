import { SendOTPResponse } from '../types/otp';
import { requestOTP } from '../api/authClient'

const OTPData: SendOTPResponse[] = []; // temporary in-memory storage for otp

export const requestOtp = async (email: string) => {
  const otpData: SendOTPResponse = await requestOTP(email);
  OTPData.push(otpData);
  return otpData;
}
