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
        type: String,
        required: true
    },

    Year: {
        type: Number,
        required: true
    },

    Location: {
        type: String,
        default: null
    }
});

export default mongoose.model('Conference', ConferenceSchema, 'Conferences');
