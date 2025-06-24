import { Router } from "express";
import { requestOTPForEmail } from "../controllers/authController";

const router = Router();

router.post('/email/otp', requestOTPForEmail);

export default router;
