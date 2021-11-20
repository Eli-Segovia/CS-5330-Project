import express from 'express';
import { test } from '../controllers/home';
import { conferencetest } from '../controllers/conference';

const router = express.Router();

router.route('/').get(conferencetest);

export default router;
