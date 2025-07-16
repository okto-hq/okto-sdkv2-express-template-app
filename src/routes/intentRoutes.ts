import { Router } from "express";
import {
  tokenTransfer,
  rawTransaction,
  tokenTransferEstimate,
  rawTransactionEstimate,
  tokenTransferExecuteAfterEstimate,
  rawTransactionExecuteAfterEstimate,
  nftTransfer,
  nftTransferEstimate,
  nftTransferExecuteAfterEstimate,
  signMessage,
  signTypedData,
  nftTransferUserOp,
  rawTransactionUserOp,
  tokenTransferUserOp,
  signUserOp,
  executeUserOp
} from "../controllers/intentController";

const router = Router();

router.post("/tokenTransfer", tokenTransfer);
router.post("/nftTransfer", nftTransfer);
router.post("/rawTransaction", rawTransaction);

router.post("/tokenTransfer/estimate", tokenTransferEstimate);
router.post("/nftTransfer/estimate", nftTransferEstimate);
router.post("/rawTransaction/estimate", rawTransactionEstimate);

router.post("/tokenTransfer/executeAfterEstimate", tokenTransferExecuteAfterEstimate);
router.post("/nftTransfer/executeAfterEstimate", nftTransferExecuteAfterEstimate);
router.post("/rawTransaction/executeAfterEstimate", rawTransactionExecuteAfterEstimate);

router.post("/tokenTransfer/createUserOp", tokenTransferUserOp);
router.post("/nftTransfer/createUserOp", nftTransferUserOp);
router.post("/rawTransaction/createUserOp", rawTransactionUserOp);

router.post("/signUserOp", signUserOp);
router.post("/executeUserOp", executeUserOp);

router.post("/signMessage", signMessage);
router.post("/signTypedData", signTypedData);

export default router;
