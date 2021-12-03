import Journal from '../models/Journal'

export const getallJournals = async (req, res, next) => {
    try {
        const journals = await Journal.find();
        res.json(journals);
    } catch (err) {
        next(err);
    }
}

export const getJournal = async (req, res, next) => {
    try {
        const journal = await Journal.find({name: req.body.name});
        res.json(journal);
    } catch (err) {
        next(err);
    }
}