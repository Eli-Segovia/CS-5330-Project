import mongoose from 'mongoose';

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://admin:u95AmrYdN47xxLph@researchpapers-cluster0.uapze.mongodb.net/Research_Papers?retryWrites=true&w=majority', {
        useNewURLParser: true,
        //useCreateIndex: true,
        //useFindAndMOdify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
