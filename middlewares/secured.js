module.exports.secured = async (req, res, next) => {
    if (req.user) {
        const test = await User.findOne({ email: req.user._json.email });

        req.user._id = test._id;
        req.user.email = test.email;
        // console.log('In MongoDB',test);
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect('/login');
};

