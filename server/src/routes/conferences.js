import express from 'express';
import * as conference from '../controllers/conference';
import * as journal from '../controllers/journal';
import * as paper from '../controllers/paper';
import * as author from '../controllers/author';
const router = express.Router();

router.route('/').get(conference.conferencetest);
router.route('/getConference').get(conference.getOneConference);

router.route('/getJournal').get(journal.getJournal);
router.route('/journals').get(journal.getallJournals);

router.route('/getPaper').get(paper.getOnePaper);
router.route('/papers').get(paper.getallPapers);
router
    .route('/createPaperJournal')
    .post(journal.createJournal)
    .post(paper.createPaperInJournal);

router
    .route('/createPaperConference')
    .post(conference.createConference)
    .post(paper.createPaperInConference);

router.route('/getAuthorBooks').get(author.getAuthorBooks);
router.route('/addAffiliation').put(author.addAffiliation);
router.route('/authors').get(author.getAuthors);
router.route('/createAuthor').post(author.createAuthor);
router
    .route('/addAuthorToBook')
    .post(author.createAuthor)
    .put(paper.addAuthorToBook);

export default router;
