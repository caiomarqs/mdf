import { bodyParser, cors } from '../middlewares';

import { Express } from 'express';

const middlewares = (app: Express) => {
    app.use(bodyParser);
    app.use(cors);
}

export default middlewares;