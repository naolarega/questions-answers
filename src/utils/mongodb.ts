import {
    Db,
    Document,
    Collection,
    MongoClient,
} from 'mongodb';
import Config from './config';

export default class MongoDB {
    private static client: MongoClient;
    private static db: Db;
    static {
        this.client = new MongoClient(Config.mongoConnectionString);
    }

    static async connect() {
        try {
            await this.client.connect();
            this.db = this.client.db(Config.mongoDatabase);
        } catch(e) {
            console.error('Unable to connect to mongodb', e);
        }
    }

    static async disconnect() {
        try {
            await this.client.close();
        } catch(e) {
            console.error('Unable to disconnect from mongodb', e);
        }
    }

    static collection(name: string): Collection<Document> {
        return this.db.collection(name);
    }
}