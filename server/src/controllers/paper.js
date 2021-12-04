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
    let author = await Author.findOne({firstName: req.body.firstName, lastName: req.body.lastName, affiliation: {$elemMatch: { name: req.body.affiliationName, start: req.body.start}}});
    await Paper.findOneAndUpdate({title: req.params.title}, {
        $push: {
            authors: author._id
        }});
    
}

export const getJournalPapers = async (req, res, next) => {
    try {
        const journal = await Journal.find({name: req.query.name, date: {$gte: req.query.start, $lte: req.query.end}});
        console.log(journal);
        
        let arry = [];
        for (var i = 0; i < journal.length; i++ )
        {
            arry.push(journal[i]._id);
            console.log(arry[i]);
        }

        const paper = await Paper.find({journal: arry});
        //const a = await Author.find({_id: {$in: paper.authors}});
        res.status(200).json({
            success: true,
            paper,
            //a
        });
    } catch (err) {
        next(err);
    }
}


export const getConferencePapers = async (req, res, next) => {
    try {
        const conference = await Conference.find({name: req.query.name,  year: { $gte: req.query.start, $lte: req.query.end }});
        //console.log(conference);
        //console.log(conference._id);
        let arry = [];
        for (var i = 0; i < conference.length; i++ )
        {
            arry.push(conference[i]._id);
            //console.log(arry[i]);
        }
        const paper = await Paper.find({conference:{$in: arry}});
        //console.log(arry);
        //console.log(paper[0]);
        //const a = await Author.find({_id: {$in: paper[0].authors}});
        res.status(200).json({
            success: true,
            paper,
            //a
        });
    } catch (err) {
        next(err);
    }
}