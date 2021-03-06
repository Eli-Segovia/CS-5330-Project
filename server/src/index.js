import express, { json } from 'express';
import dotenv from 'dotenv';
import conn from './config/db';
import cors from 'cors';

import conferences from './routes/routes';

// this is to log some simple messages on the routes being called
import morgan from 'morgan';

// set app as express application
const app = express();
app.use(json());

app.use(
    cors({
        origin: '*'
    })
);

// load dev env vars
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: `${__dirname}/config/.env` });
    // Mount dev logging middle Middleware
    app.use(morgan('dev'));
}

conn();

// Mount routers
// app.use('/', home);
app.use('/', conferences);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
