import { Router } from "express";
import { tokenTransfer } from "../controllers/intentController";

const router = Router();

router.post("/tokenTransfer", tokenTransfer);

export default router;
