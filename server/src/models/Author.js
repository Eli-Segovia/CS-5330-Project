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
            name: String,
            start: Date,
            end: Date
        })
    }
});

export default mongoose.model('Author', AuthorSchema, 'Authors');
