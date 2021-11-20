import express from 'express';
import dotenv from 'dotenv';
import conn from './config/db';

// this is just to test endpoint routes. Delete when we are dealing with real stuff
import home from './routes/home';
import conferences from './routes/conferences';

// this is to log some simple messages on the routes being called
import morgan from 'morgan';

// set app as express application
const app = express();

// load dev env vars
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: `${__dirname}/config/.env` });
    // Mount dev logging middle Middleware
    app.use(morgan('dev'));
}

conn();

// Mount routers
app.use('/', home);
app.use('/conferences', conferences);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
