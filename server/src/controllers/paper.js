import Paper from '../models/Paper'

export const createPaper = async (req, res, next) => {
    let paper = await Paper.findOne({ title: req.body.title });
    if (!paper) {
        paper = new Paper(req.body);
    } else {
        console.log(paper);
        return next(new Error('paper already exists'));
    }
    try {
        const newPaper = await paper.save();
        //create token
        const token = paper.getSignedJwtToken();

        res.json({ success: true, token, newPaper});
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
        const paper = await Paper.find({title: req.body.title});
        res.status(200).json({
            success: true,
            paper,
        });
    } catch (err) {
        next(err);
    }
}