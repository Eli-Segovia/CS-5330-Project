import express from 'express';
import * as conference from '../controllers/conference';
import * as journal from '../controllers/journal'
import * as paper from '../controllers/paper'
import * as author from '../controllers/author'
const router = express.Router();

router.route('/').get(conference.conferencetest);
router.route('/getConference').get(conference.getOneConference);

router.route('/getJournal').get(journal.getJournal);
router.route('/journals').get(journal.getallJournals);

router.route('/getPaper').get(paper.getOnePaper);
router.route('/papers').get(paper.getallPapers);
router.route('/createPaper').post(paper.createPaper);


router.route('/getAuthorBooks').get(author.getAuthorBooks);
router.route('/authors').get(author.getAuthors)
router.route('/createAuthor').post(author.createAuthor);

export default router;
