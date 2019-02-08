import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { renderFile } from 'ejs';
import userRoutes from './routes/user';
const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', renderFile);
app.set('view engine', 'html');

app.use('/user', userRoutes);

export default app;
