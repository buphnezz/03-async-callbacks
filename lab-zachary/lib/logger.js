'use strict';

const winston = require('winston');
console.log(winston);
const logger = module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'captains.log', level: 'verbose' }),
    new winston.transports.Console({ format: winston.format.simple(), level: 'info' }),
  ],
});

logger.INFO = 'info';
logger.ERROR = 'error';
logger.VERBOSE = 'verbose';