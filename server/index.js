import express from 'express';
import dotenv from 'dotenv';

import home from './routes/home';

// load dev env vars
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './config/.env' });
}

const app = express();

// Mount routers
app.use('/', home);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
