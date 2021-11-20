// @desc    Test endpoint
// @route   GET /
// @access  Public
export const test = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: 'Some thing happened' });
};

