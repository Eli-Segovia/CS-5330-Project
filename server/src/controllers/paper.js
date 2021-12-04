import Paper from '../models/Paper'
import Author from '../models/Author'
import Journal from '../models/Journal';
import Conference from '../models/Conference';


export const createPaperInJournal = async (req, res, next) => {
    let j = await Journal.findOne({name: req.body.journalName});
    let paper = await Paper.findOne({ title: req.body.title });
    if (!paper) {
            paper = new Paper(req.body);
    } else {
        console.log(paper);
        return next(new Error('paper already exists'));
    }
    try {
        paper.journal = j._id;
        const newPaper = await paper.save();
        //create token
        //const token = paper.getSignedJwtToken();

        res.json({ success: true, newPaper});
    } catch (err) {
        next(err);
        console.log(err);
    }
};

export const createPaperInConference = async (req, res, next) => {
    let c = await Conference.findOne({name: req.body.conferenceName});
    let paper = await Paper.findOne({ title: req.body.title });
    if (!paper) {
            paper = new Paper(req.body);
    } else {
        console.log(paper);
        return next(new Error('paper already exists'));
    }
    try {
        paper.conference = c._id;
        const newPaper = await paper.save();
        //create token
        //const token = paper.getSignedJwtToken();

        res.json({ success: true, newPaper});
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
}

export const getOnePaper = async (req, res, next) => {
    //console.log(req.query.title);

    try {
        const paper = await Paper.find({title: req.query.title});
        res.status(200).json({
            success: true,
            paper,
        });

        const list = paper[0].authors;

        console.log(paper[0].authors);

        for (let index = 0; index < list.length; index++) {
            let a = list[index];
            console.log('Inside loop');
            console.log(a);
            let author = await Author.find({_id: a});
            console.log(author);
            res.status(200).json({
                success: true,
                author,
            });
            
        }
        //console.log(paper);

    } catch (err) {
        next(err);
    }
}

export const addAuthorToBook = async (req, res, next) => {
    let author = await Author.findOne({firstName: req.body.firstName, lastName: req.body.lastName, affiliation: {$elemMatch: { name: req.body.affiliationName, start: req.body.start}}});
    await Paper.findOneAndUpdate({title: req.params.title}, {
        $push: {
            authors: author._id
        }});
    
}