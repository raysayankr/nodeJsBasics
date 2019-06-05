const Logger = require('./logger');
 
const logger=new Logger();

logger.on('message', data => console.log(`Called Listener` , data));

logger.log('World');
logger.log('Hi');
logger.log('Hello');