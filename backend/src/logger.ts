import * as fs from 'fs';
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const logDirectory = process.env.LOG_PATH || '/var/log/nestjs/app.log';

const logDir = logDirectory.substring(0, logDirectory.lastIndexOf('/'));
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: logDirectory }),
  ],
});

export default logger;
