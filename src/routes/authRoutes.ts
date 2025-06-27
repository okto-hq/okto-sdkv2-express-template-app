import { Router } from "express";
import { requestOTPForEmail, verifyOTPForEmail, authenticate, requestOTPForWhatsapp, verifyOTPForWhatsapp } from "../controllers/authController";

const router = Router();

router.post("/email/otp", requestOTPForEmail);
router.post("/email/verify-otp", verifyOTPForEmail);
router.post("/whatsapp/otp", requestOTPForWhatsapp);
router.post("/whatsapp/verify-otp", verifyOTPForWhatsapp);
router.post("/authenticate", authenticate);

export default router;
