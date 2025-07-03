import { Router } from "express";
import { account, chains, orderHistory, portfolio, portfolioActivity, portfolioNFT, readContractData, tokens } from '../controllers/explorerController';

const router = Router();

router.post("/account", account);
router.post("/chains", chains);
router.post("/tokens", tokens);
router.post("/portfolio", portfolio);
router.post("/portfolio-activity", portfolioActivity);
router.post("/portfolio-nft", portfolioNFT);
router.post("/order-history", orderHistory);
router.post("/read-contract-data", readContractData);

export default router;
