import { bodyParser, cors, logger } from '../middlewares';

import { Express } from 'express';

const middlewares = (app: Express) => {
    app.use(bodyParser);
    app.use(cors);
    app.use(logger);
}

export default middlewares;