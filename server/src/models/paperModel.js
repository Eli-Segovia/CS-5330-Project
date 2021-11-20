import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
const PaperSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    authors: {
        type: [String],
        required: true
    },

    conference: {
        type: mongoose.ObjectId,
        default: null
    },

    journal: {
        type: mongoose.ObjectId,
        default: null
    },

    category: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: null
    },
    page: {
        type: String,
        default: true
    }
});

export default mongoose.model('Paper', PaperSchema);
