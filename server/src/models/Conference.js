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
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        default: null
    }
});

export default mongoose.model('Conference', ConferenceSchema, 'Conferences');
