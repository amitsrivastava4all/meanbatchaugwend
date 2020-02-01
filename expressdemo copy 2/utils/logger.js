const winston = require('winston');
const formatting = winston.format;
const logger = winston.createLogger({
    level: 'debug',
    format: formatting.combine(formatting.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),formatting.json()),
    //format: winston.format.json(),
    transports: [
     
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
  module.exports = logger;