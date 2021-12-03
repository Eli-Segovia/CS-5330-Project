import Author from '../models/Author';
import Paper from '../models/Paper';

export const createAuthor = async (req, res, next) => {
    console.log(req.body);
    let author = new Author(req.body);
    try {
        const newAuthor = await author.save();

        res.json({ success: true, newAuthor });
    } catch (err) {
        next(err);
        console.log(err);
    }
};

export const getAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        next(err);
    }
};

//return books for a given author
export const getAuthorBooks = async (req, res, next) => {
    const first = req.body.firstName;
    const last = req.body.lastName;
    try {
        var as = await Author.find({ firstName: first, lastName: last });
        if (!user) {
            return next(new ErrorResponse('User not found', 404));
        }
        const papers = await Paper.find({ authors: as.id });

        res.json({
            sucess: true,
            papers
        });
    } catch (err) {
        next(err);
    }
};
