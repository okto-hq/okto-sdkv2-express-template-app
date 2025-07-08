import { Router } from "express";
import {
  tokenTransfer,
  rawTransaction,
  tokenTransferEstimate,
  rawTransactionEstimate,
  tokenTransferExecuteAfterEstimate,
  rawTransactionExecuteAfterEstimate,
  nftTransfer
} from "../controllers/intentController";

const router = Router();

router.post("/tokenTransfer", tokenTransfer);
router.post("/nftTransfer", nftTransfer);
router.post("/rawTransaction", rawTransaction);

router.post("/tokenTransfer/estimate", tokenTransferEstimate);
router.post("/rawTransaction/estimate", rawTransactionEstimate);

router.post("/tokenTransfer/executeAfterEstimate", tokenTransferExecuteAfterEstimate);
router.post("/rawTransaction/executeAfterEstimate", rawTransactionExecuteAfterEstimate);

export default router;
