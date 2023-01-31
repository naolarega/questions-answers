import express from 'express';
import schema from './schema';
import Config from './utils/config';
import { createHandler } from 'graphql-http/lib/use/express';

const app = express();

app.all('/graphql', createHandler({ schema }));

app.listen(Config.port, Config.host, () => {
    console.log('Server is running...');
});