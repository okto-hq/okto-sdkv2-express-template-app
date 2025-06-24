import { Request, Response, NextFunction } from 'express';
import * as AuthService from '../services/authService';

export const requestOTPForEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.body.email;
    const otpData = await AuthService.requestOtp(email);
    res.json(otpData);
  } catch (error) {
    next(error);
  }
}
