import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { renderFile } from 'ejs';
import routes from './routes';
import fetchRoutes from './routes/fetch';
import { clear } from './utils/cache';

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', renderFile);
app.set('view engine', 'html');

app.use('/', routes);
app.use('/fetch', fetchRoutes);
app.use('/clear-cache', clear);

export default app;
