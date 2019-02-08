import express from 'express';
import contentController from '../controllers/contentController';
const router = express.Router();

router.get('/', contentController.index);
router.get('/all-categories', contentController.allCategories);

export default router;
