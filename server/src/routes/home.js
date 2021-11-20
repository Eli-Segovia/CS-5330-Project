import express from 'express';
import { test } from '../controllers/home';

const router = express.Router();

router.route('/').get(test);

export default router;
