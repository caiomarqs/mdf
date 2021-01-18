import morgan from 'morgan';

morgan.token('type', (req, _) => req.headers['content-type']);
const logger = morgan(':method :url :status :type - :response-time ms');

export { logger };