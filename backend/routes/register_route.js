const router = require('express').Router;

router.post('/',registerUser);
/*
*
*
*
 */
function registerUser(req,res,next)
{
    //Insert into user table
    // res.render('browseHotels.ejs');
    //send token using a cookie
}

module.exports = function(app){
    app.use("/register", router);
};