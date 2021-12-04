import Paper from '../models/Paper';
import Author from '../models/Author';
import Journal from '../models/Journal';
import Conference from '../models/Conference';

export const createPaperInJournal = async (req, res, next) => {
    let journal = await Journal.findOne({ name: req.body.name, date: req.body.date });
    if (!journal) {
        journal = new Journal(req.body);
        journal.save();
    } else {
        console.log(journal);
    }
    let paper = await Paper.findOne({ title: req.body.title });
    if (!paper) {
        paper = new Paper(req.body);
    } else {
        console.log(paper);
        return next(new Error('paper already exists'));
    }
    try {
        paper.journal = journal._id;
        const newPaper = await paper.save();

        res.json({ success: true, newPaper });
    } catch (err) {
        next(err);
        console.log(err);
    }
};

export const createPaperInConference = async (req, res, next) => {
    console.log('this did happen');
    let conference = await Conference.findOne({ name: req.body.name, year: req.query.year});
    if (!conference) {
        conference = new Conference(req.body);
        await conference.save();
    }
    let paper = await Paper.findOne({ title: req.body.title });
    if (!paper) {
        paper = new Paper(req.body);
    } else {
        console.log(paper);
        return next(new Error('paper already exists'));
    }
    try {
        paper.conference = conference._id;
        console.log(req.body.authors);
        paper.authors = req.body.authors;
        const newPaper = await paper.save();
        //create token
        //const token = paper.getSignedJwtToken();

        res.json({ success: true, newPaper });
    } catch (err) {
        next(err);
        console.log(err);
    }
};

export const getallPapers = async (req, res, next) => {
    try {
        const papers = await Paper.find();
        res.json(papers);
    } catch (err) {
        next(err);
    }
};

export const getOnePaper = async (req, res, next) => {
    try {
        const paper = await Paper.find({ title: req.query.title });
        const a = await Author.find({_id: {$in: paper[0].authors}});
        //console.log(paper[0].conference)
        //console.log(paper[0].journal);
        if(!paper[0].conference){
            const j = await Journal.find({_id: paper[0].journal})
            //console.log('Inside j')
            //console.log(j);
            res.status(200).json({
                success: true,
                paper,
                a,
                j
            });
        }
        else{

            const c = await Conference.find({_id: paper[0].conference})
            //console.log('Inside c')
            //console.log(c);

            res.status(200).json({
                success: true,
                paper,
                a,
                c
            });
            
        }

    } catch (err) {
        next(err);
    }
};

export const addAuthorToBook = async (req, res, next) => {
    let author = await Author.findOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        affiliation: {
            $elemMatch: {
                name: req.body.affiliationName,
                start: req.body.start
            }
        }
    });
    await Paper.findOneAndUpdate(
        { title: req.body.title },
        {
            $push: {
                authors: author._id
            }
        }
    );
};

export const getJournalPapers = async (req, res, next) => {
    try {
        const journal = await Journal.find({name: req.query.name});
        const paper = await Paper.find({journal: journal._id, date: {$gt: req.query.start, $lt: req.query.end}});
        const a = await Author.find({_id: {$in: paper.authors}});
        res.status(200).json({
            success: true,
            paper,
            a
        });
    } catch (err) {
        next(err);
    }
};



export const addAuthorToBook = async (req, res, next) => {
    let author = await Author.findOne({firstName: req.body.firstName, lastName: req.body.lastName, affiliation: {$elemMatch: { name: req.body.affiliationName, start: req.body.start}}});
    await Paper.findOneAndUpdate({title: req.params.title}, {
        $push: {
            authors: author._id
        }});
    
}

export const getJournalPapers = async (req, res, next) => {
    try {
        const journal = await Journal.findOne({name: req.params.name});
        const p = await Paper.find({journal: journal._id, date: {$gt: req.params.start, $lt: req.params.end}});
        res.status(200).json({
            success: true,
            p
        });
    } catch (err) {
        next(err);
    }
}


export const getConferencePapers = async (req, res, next) => {
    try {
        const conference = await Conference.findOne({name: req.query.name});
        const p = await Paper.find({conference: conference._id, year: { $gt: req.params.start, $lt: req.prams.end }});
        res.status(200).json({
            success: true,
            p

        });
    } catch (err) {
        next(err);
    }

}

