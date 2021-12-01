import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
const AuthorSchema = new Schema({
    authorId: {
        type: Number,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        default: null
    },

    affiliation: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                start: {
                    type: Date,
                    required: true
                },
                end: {
                    type: Date,
                    default: null
                }
            }
        ],
        default: null
    }
});

export default mongoose.model('Author', AuthorSchema);
