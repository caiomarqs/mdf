import express from 'express';

import setupEnv from './dotenv';
import setupMiddlewares from './middlewares';
import setupRoutes from './routes';

setupEnv();

const app = express();
setupMiddlewares(app);
setupRoutes(app);

export { app };