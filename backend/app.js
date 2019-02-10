import express from 'express';
import bodyParser from 'body-parser';
import cors from './utils/cors';
import compression from 'compression';
import { renderFile } from 'ejs';
import routes from './routes';
import fetchRoutes from './routes/fetch';
const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', renderFile);
app.set('view engine', 'html');

app.use('/', routes);
app.use('/fetch', fetchRoutes);

export default app;
