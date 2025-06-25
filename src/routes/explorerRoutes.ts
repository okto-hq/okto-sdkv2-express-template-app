import { Router } from "express";
import { account } from '../controllers/explorerController';

const router = Router();

router.get('/account', account);

export default router;
