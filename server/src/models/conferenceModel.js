import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
const ConferenceSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    timeHeld: {
        type: Date,
        required: true
    },

    year: {
        type: int,
        required: true
    },

    location: {
        type: mongoose.ObjectId,
        default: null
    }
});

export default mongoose.model('Conference', ConferenceSchema);
