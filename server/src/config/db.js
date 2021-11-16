import mongoose from 'mongoose';

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewURLParser: true,
        useCreateIndex: true,
        useFindAndMOdify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
