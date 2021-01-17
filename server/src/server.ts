import { AddressInfo } from 'net';

import { Mongo } from './db'

const uri = "mongodb+srv://mduser:mduser@cluster0.jzno0.mongodb.net/<dbname>?retryWrites=true&w=majority"

Mongo
    .connect(uri)
    .then(async() => {
        const { app } = (await import('./config/app'));

        app.listen(5000, () => {
            console.log('Server on : localhost:5000')
        })
    })
    .catch(() => {
        console.log("Não foi possivel se conectar ao banco!");
    });