import { MongoClient, Collection } from 'mongodb';

const Mongo = {
    client: null as unknown as MongoClient,
    uri: null as unknown as string,

    async connect(uri: string): Promise<void> {
        this.uri = uri;
        this.client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    },

    async disconnect(): Promise<void> {
        await this.client.close();
    },

    async getCollection(name: string): Promise<Collection> {
        if (!this.client?.isConnected()) {
            await this.connect(this.uri);
        }

        return this.client.db().collection(name);
    },

    map: (data: any): any => {
        const { _id, ...otherData } = data;
        return { ...otherData, id: _id };
    },

    mapCollection: (collection: any[]): any[] => {
        return collection.map(c => Mongo.map(c));
    }
}

export { Mongo };