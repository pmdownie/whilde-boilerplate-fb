import express from 'express';
import errorHandlers from '../utils/errorHandlers';
import cache from '../utils/cache';
import contentController from '../controllers/contentController';
const router = express.Router();
const { catchErrors } = errorHandlers;

router.get('/', contentController.index);
router.get('/homepage', cache(18500), catchErrors(contentController.getHomepage));
