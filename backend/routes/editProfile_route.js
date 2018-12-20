const router = require("express").Router();

router.post("/",updateUserData);

function updateUserData(req,res){
    data = req.body;
    //SQL QUERY TO UPDATE USER DATA
    res.render("profile");
}

module.exports = function(app){
    app.user("/edit_profile",router);
};