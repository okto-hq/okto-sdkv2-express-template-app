import { Router } from "express";
import { tokenTransfer, rawTransaction } from "../controllers/intentController";

const router = Router();

router.post("/tokenTransfer", tokenTransfer);
router.post("/rawTransaction", rawTransaction);

router.post("/tokenTransfer/estimate", tokenTransferEstimate);
router.post("/rawTransaction/estimate", rawTransactionEstimate);

router.post("/rawTransaction/executeAfterEstimate", rawTransactionExecuteAfterEstimate);
export default router;
