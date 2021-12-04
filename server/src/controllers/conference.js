import Conference from '../models/Conference';

export const conferencetest = async (req, res, next) => {
    console.log('Testing');
    const a = await Conference.find();
    console.log(a);
    res.status(200).json({ a });
};

export const getOneConference = async (req, res, next) => {
    const a = await Conference.find({ title: req.params.title });
    console.log(a);
    res.status(200).json({ a });
};

export const getConfById = async (req, res, next) => {
    const conference = await Conference.findById(req.query.id);
    res.status(200).json({ conference });
};

export const createConference = async (req, res, next) => {
    let conference = await Conference.findOne({ name: req.body.name });
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
