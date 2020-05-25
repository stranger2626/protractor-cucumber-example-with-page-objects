const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

module.exports = {
  logger
};
