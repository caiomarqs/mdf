import { config } from 'dotenv';

import { Mongo } from './db';

const NODE_ENV = process.env.NODE_ENV;

if ((NODE_ENV != 'prod' && NODE_ENV != 'test') || NODE_ENV === undefined) {
    config({
        path: process.cwd() + '/.env.dev'
    })
}

const createServer = async () => {
    const { app } = (await import('./config/app'));

    app.listen(process.env.PORT, () => {
        console.log(`Server on : ${process.env.PORT}`)
    })
}

const createConnection = () => {
    return Mongo
        .connect(process.env.MONGO_URI as string)
        .then(async () => await createServer())
        .catch(() => new Error("Não foi possivel se conectar ao banco!"));
}

createConnection();

export { createServer, createConnection }