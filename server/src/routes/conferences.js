import express from 'express';
import { conferencetest } from '../controllers/conference';

const router = express.Router();

router.route('/').get(conferencetest);

export default router;
