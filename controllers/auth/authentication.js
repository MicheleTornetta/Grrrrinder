function checkAuth (req, res, next) {
    if (req.session.userId) 
        next();
    else
        res.status(400).json({err: 'You must be logged in to perform this action.'});
}

module.exports = checkAuth;