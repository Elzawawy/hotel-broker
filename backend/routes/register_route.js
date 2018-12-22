const router = require('express').Router();
router.get('/',loadRegisterPage);
router.post('/',registerUser);

function loadRegisterPage(req,res){
    res.render("pages/register");
}

function registerUser(req,res)
{
    //Insert user into database then take him to his profile page
    req.session.user = req.body;
    res.redirect("/profile");
}

module.exports = function(app){
    app.use("/register", router);
};