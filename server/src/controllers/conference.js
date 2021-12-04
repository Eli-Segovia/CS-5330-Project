import Conference from '../models/Conference';

export const conferencetest = async (req, res, next) => {
    console.log('Testing');
    const a = await Conference.find();
    console.log(a);
    res.status(200).json({ a });
};

export const getOneConference = async (req, res, next) => {
    const a = await Conference.find({ title: req.query.title, year: req.query.year});
    console.log(a);
    res.status(200).json({ a });
};

export const createConference = async (req, res, next) => {
    let conference = await Conference.findOne({ name: req.body.name, year: req.body.year });
    if (!conference) {
        conference = new Conference(req.body);
    } else {
        console.log(conference);
        return next();
    }
    try {
        const newConference = await conference.save();
        //create token
        //const token = paper.getSignedJwtToken();

        res.json({ success: true, newConference });
    } catch (err) {
        next(err);
        console.log(err);
    }
};
