import Conference from '../models/Conference';

export const conferencetest = async (req, res, next) => {
    console.log('Testing');
    const a = await Conference.find({});
    console.log(a);
    res.status(200).json({ a });
};
