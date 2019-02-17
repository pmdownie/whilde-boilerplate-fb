import express from 'express';
import errorHandlers from '../utils/errorHandlers';
import cache from '../utils/cache';
import contentController from '../controllers/contentController';
const router = express.Router();
const { catchErrors } = errorHandlers;

router.get('/', contentController.index);
router.get('/homepage', cache(18500), catchErrors(contentController.getHomepage));
router.get('/about', cache(18500), catchErrors(contentController.getAbout));
router.get(
    '/all-categories',
    cache(18500),
    catchErrors(contentController.getAllCategories)
);
router.get('/category/:id', cache(18500), catchErrors(contentController.getCategory));

export default router;
