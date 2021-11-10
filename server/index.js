import express from 'express';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './config/.env' });
}

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
