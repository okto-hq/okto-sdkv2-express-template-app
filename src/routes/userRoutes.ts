import { Router } from 'express';
import { getUser, createUser, getAllUsers } from '../controllers/userController';

const router = Router();

router.get('/:id', getUser);
router.post('/', createUser);
router.get('/', getAllUsers);

export default router;
