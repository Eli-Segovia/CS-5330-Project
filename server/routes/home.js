import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ sucess: true, msg: 'Some thing happened' });
});

export default router;
