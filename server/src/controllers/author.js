import Author from '../models/Author'
import Paper from '../models/Paper'

export const createAuthor = async (req, res, next) => {
    let author = await Author.findOne({firstName: req.body.firstName, lastName: req.body.lastName, affiliation: {$elemMatch: { name: req.body.affiliationName, start: req.body.start}}});
    if (!author) {
        author = new Author(req.body);
    } else {
        console.log(author);
        return next(new Error('author already exists'));
    }
    try {
        const newAuthor = await author.save();
        //create token
        //const token = author.getSignedJwtToken();

        res.json({ success: true, newAuthor});
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
    const first  = req.params.firstName;
    const last = req.params.lastName;
    try {
        var as = await Author.find({firstName: first, lastName:last});
        if (!user) {
            return next(new ErrorResponse('User not found', 404));
        }
        const papers = await Paper.find({authors: as.id});


        res.json({
            sucess: true,
            papers,
        });
    } catch (err) {
        next(err);
    }
};

export const addAffiliationToAuthor = async (req, res, next) => {
   
    await Author.findOneAndUpdate({firstName: req.body.firstName, lastName: req.body.lastName, affiliation: {$elemMatch: { name: req.body.affiliationName, start: req.body.start}}}, {
        $push: {
            affiliation: {
                name: req.body.newAffiliation,
                start: req.body.newStart,
                end: req.body.newEnd
            }
        }});
    
}