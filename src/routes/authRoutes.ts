import { Router } from "express";
import { requestOTPForEmail, verifyOTPForEmail } from "../controllers/authController";

const router = Router();

router.post('/email/otp', requestOTPForEmail);
router.post('/email/verify-otp', verifyOTPForEmail);

export default router;
