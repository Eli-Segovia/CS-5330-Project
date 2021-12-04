import Journal from '../models/Journal';

export const getallJournals = async (req, res, next) => {
    try {
        const journals = await Journal.find();
        res.json(journals);
    } catch (err) {
        next(err);
    }
};

export const getJournal = async (req, res, next) => {
    try {
        const journal = await Journal.find({ name: req.params.name });
        res.json(journal);
    } catch (err) {
        next(err);
    }
};

export const getJournalById = async (req, res, next) => {
    const journal = await Journal.findById(req.query.id);
    res.status(200).json({ journal });
};

export const createJournal = async (req, res, next) => {
    let journal = await Journal.findOne({ name: req.body.name });
    if (!journal) {
        journal = new Journal(req.body);
    } else {
        console.log(journal);
        return next(new Error('journal already exists'));
    }
    try {
        const newJournal = await journal.save();
        //create token
        //const token = paper.getSignedJwtToken();

        res.json({ success: true, newJournal });
    } catch (err) {
        next(err);
        console.log(err);
    }
};
