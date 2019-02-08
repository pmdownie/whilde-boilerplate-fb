import { createLogger, format, transports } from 'winston';
const { combine, splat, simple, colorize, printf } = format;

const myFormat = printf(info => {
    return `${info.level}: ${info.message}`;
});

const logger = createLogger({
    format: combine(colorize(), splat(), simple()),
    transports: [new transports.Console()],
    exitOnError: false,
    myFormat
});

export default logger;
