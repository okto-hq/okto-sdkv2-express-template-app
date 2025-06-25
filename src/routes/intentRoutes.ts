import { Router } from "express";
import { tokenTransfer , rawTransaction } from "../controllers/intentController";

const router = Router();

router.post("/tokenTransfer", tokenTransfer);
router.post("/rawTransaction", rawTransaction);

export default router;
