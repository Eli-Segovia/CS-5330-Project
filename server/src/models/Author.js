import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
const AuthorSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        default: null
    },

    affiliation: {
        type: Array,
        of: new Schema({
            name: {
                type: String,
                required: true
            },
            start: {
                type: Date,
                required: true
            },
            end: Date
        })
    }
});

export default mongoose.model('Author', AuthorSchema, 'Authors');
