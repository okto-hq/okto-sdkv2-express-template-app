import { Router } from "express";
import { account, chains } from '../controllers/explorerController';

const router = Router();

router.get('/account', account);
router.get('/chains', chains);

export default router;
