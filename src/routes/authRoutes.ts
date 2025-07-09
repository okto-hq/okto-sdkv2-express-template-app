import { Router } from "express";
import {
  requestOTPForEmail,
  verifyOTPForEmail,
  authenticate,
  requestOTPForWhatsapp,
  verifyOTPForWhatsapp,
  callbackTwitter,
  callbackApple
} from "../controllers/authController";

const router = Router();

router.post("/email/otp", requestOTPForEmail);
router.post("/email/verify-otp", verifyOTPForEmail);
router.post("/whatsapp/otp", requestOTPForWhatsapp);
router.post("/whatsapp/verify-otp", verifyOTPForWhatsapp);
router.post("/authenticate", authenticate);

router.post("/callback/twitter", callbackTwitter);
router.post("/callback/apple", callbackApple);
export default router;
