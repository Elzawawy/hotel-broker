const requireLogin = function requireLogin (req, res, next) {
    if (req.session  && req.session.user) {
        console.log("user already logged in");
        res.redirect("/browse_hotels");
    } else {
        next();
    }
};

module.exports = requireLogin;