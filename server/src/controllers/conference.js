import Conference from "../models/conferenceModel";
import mongoose from 'mongoose';

export const conferencetest = async(req, res, next) => {
    console.log("Testing");
    const Name = await Conference.find({});
    console.log(Name);
    res.status(200).json({ Name });
};
