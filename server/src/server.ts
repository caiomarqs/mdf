import { Mongo } from './db';

const uri = "mongodb+srv://backend:backend@cluster0.jzno0.mongodb.net/Cluster0?retryWrites=true&w=majority"

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