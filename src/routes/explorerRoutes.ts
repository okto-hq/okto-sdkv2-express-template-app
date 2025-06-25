import { Router } from "express";
import { account, chains, tokens } from '../controllers/explorerController';

const router = Router();

router.get('/account', account);
router.get('/chains', chains);
router.get('/tokens', tokens);

export default router;
