import express from 'express';
import errorHandlers from '../utils/errorHandlers';
import contentController from '../controllers/contentController';
const router = express.Router();
const { catchErrors } = errorHandlers;

router.get('/', contentController.index);
router.get('/about', catchErrors(contentController.getAbout));
router.get('/all-categories', catchErrors(contentController.getAllCategories));
router.get('/category/:id', catchErrors(contentController.getCategory));

export default router;
