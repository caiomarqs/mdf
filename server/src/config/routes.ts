import { Express, Router } from 'express';
import { readdirSync } from 'fs';

const routes = (app: Express) => {
    const router = Router();

    // Dinamic import of routes
    app.use('/v1', router);

    readdirSync(`${__dirname}/../routes`).map(async file => {

        if(file.endsWith('.ts') || file.endsWith('.js')) {
            const route = await import(`./../routes/${file}`);
            route.default(router);
        }

    });
}

export default routes;