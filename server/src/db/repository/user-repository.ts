import { Mongo } from '../mongodb';
import { User } from '../../models';

class UserRepository {

    async getUserByID(id: string): Promise<any> {
        const collection = await Mongo.getCollection('user');

        const userDb = await collection.findOne({
            '_id': id
        });

        if (!userDb) {
            return null;
        }

        return new User(
            userDb.name,
            userDb.email,
            null,
            userDb._id
        );

    }

    async getUserByEmail(email: string): Promise<null | User> {
        const collection = await Mongo.getCollection('user');

        const userDb = await collection.findOne({
            'email': email
        });

        if (!userDb) {
            return null;
        }

        return new User(
            userDb.name,
            userDb.email,
            null,
            userDb._id
        );

    }

    async authUser(email: string, password: string): Promise<boolean> {
        const collection = await Mongo.getCollection('user');

        const userDb = await collection.findOne({
            'email': email
        });

        return userDb.password === password;
    }

    async insertUser(user: User): Promise<string> {

        const collection = await Mongo.getCollection('user');

        try {
            const insertUser = await collection.insertOne(user);
            return insertUser.insertedId;
        }
        catch {
            throw new Error('Não foi possivel inserir o usuário!');
        }
    }
}

export { UserRepository };