import Conference from '../models/Conference';

export const conferencetest = async (req, res, next) => {
    console.log('Testing');
    const a = await Conference.find();
    console.log(a);
    res.status(200).json({ a });
};

export const getOneConference = async (req, res, next) => {
    
    const a = await Conference.find({title: req.body.title});
    console.log(a);
    res.status(200).json({ a });
};
