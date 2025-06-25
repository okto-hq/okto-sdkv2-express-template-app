import { Router } from "express";
import { account, chains, portfolio, tokens } from '../controllers/explorerController';

const router = Router();

router.get('/account', account);
router.get('/chains', chains);
router.get('/tokens', tokens);
router.get('/portfolio', portfolio);

export default router;
