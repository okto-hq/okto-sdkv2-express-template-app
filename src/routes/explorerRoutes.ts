import { Router } from "express";
import { account, chains, orderHistory, portfolio, portfolioActivity, portfolioNFT, readContractData, tokens } from '../controllers/explorerController';

const router = Router();

router.get('/account', account);
router.get('/chains', chains);
router.get('/tokens', tokens);
router.get('/portfolio', portfolio);
router.get('/portfolio-activity', portfolioActivity);
router.get('/portfolio-nft', portfolioNFT);
router.get('/order-history', orderHistory);
router.post('/read-contract-data', readContractData);

export default router;
