import '@babel/polyfill';
import chalk from 'chalk';
import app from './app';
import logger from './utils/logger';
import config from './config';

const server = app.listen(config.port, err => {
    if (err) {
        logger.error(err);
        process.exit(1);
    }

    require('./utils/db');

    config.env === 'development'
        ? logger.info(
              chalk.blue.bgYellow.bold(
                  `Listening at address http://localhost:${config.port}`
              )
          )
        : logger.info(`Express running → PORT ${server.address().port}`);
});
