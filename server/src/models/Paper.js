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
        type: [mongoose.ObjectId],
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
    url: {
        type: String,
        default: null
    },
    page: {
        type: String,
        default: null
    }
});

export default mongoose.model('Papers', PaperSchema);
