import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();

router.get('/create', userController.add);
router.post('/create', userController.create);

export default router;
