import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
const ConferenceSchema = new Schema({
    Name: {
        type: String,
        required: true
    },

    timeHeld: {
        type: Date,
        required: true
    },

    Year: {
        type: Number,
        required: true
    },

    location: {
        type: mongoose.ObjectId,
        default: null
    }
});

export default mongoose.model('Conference', ConferenceSchema);
