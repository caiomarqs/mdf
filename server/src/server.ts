import { config } from 'dotenv';

import { Mongo } from './db';

const nodeEnv = process.env.NODE_ENV;
if ((nodeEnv != 'prod' && nodeEnv != 'test') || nodeEnv === undefined) {
    config({
        path: process.cwd() + '/.env.dev'
    })
}

const createServer = async () => {
    const { app } = (await import('./config/app'));
    app.listen(5000, () => {
        console.log('Server on localhost:5000')
    })
}

const createConnection = () => {
    return Mongo
        .connect(process.env.MONGO_URI as string)
        .then(async () => await createServer())
        .catch((err) => new Error("Não foi possivel se conectar ao banco!"));
}

createConnection();

export { createServer, createConnection }