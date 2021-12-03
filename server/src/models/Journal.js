import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
const JournalSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    volume: {
        type: String,
        required: true
    }
});

export default mongoose.model('Journals', JournalSchema, 'Journals');
