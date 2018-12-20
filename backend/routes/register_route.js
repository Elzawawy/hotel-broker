const router = require('express').Router();
router.get('/',loadRegisterPage);
router.post('/',registerUser);

function loadRegisterPage(req,res){
    res.render("register");
}

function registerUser(req,res)
{
    user = req.body;
    //First Check if a user has the same username or password
    //"SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
    //Insert into user table
    // res.render('browseHotels.ejs');
    //send token using a cookie
    res.render("user_profile",{user: user});
}

module.exports = function(app){
    app.use("/register", router);
};