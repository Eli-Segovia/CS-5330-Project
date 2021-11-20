import express from 'express';
import { conferencetest } from '../controllers/conferenceController';

const router = express.Router();

router.route('/').get(conferencetest);

export default router;
