import * as dotenv from 'dotenv';

export default class Config {
    static {
        dotenv.config();
    }

    static get host() {
        return process.env['HOST'];
    }

    static get port() {
        const port = process.env['PORT'];
        if(!port) {
            return 8080;
        }
        return Number(port);
    }

    static get mongoConnectionString() {
        return process.env['MONGO_CONNECTION_STRING'];
    }

    static get redisSonnectionString() {
        return process.env['REDIS_CONNECTION_STRING'];
    }
}