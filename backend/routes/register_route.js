const router = require('express').Router();
query = require("../db/QueryHandlers");
router.get('/',loadRegisterPage);
router.post('/',registerUser);

function loadRegisterPage(req,res){
    res.render("pages/register");
}

function registerUser(req,res)
{
    console.log("Hey dude");
    let user = {
        Username: req.body.username,
        Email: req.body.email,
        Password: req.body.password1,
        Name: req.body.name,
        Phone: req.body.phone,
        Bdate: req.body.birthdate,
        Address: req.body.address,
        Role: "Customer"
    };
    req.session.user = req.body;
    query.userQueries.userInsert(user);
    res.redirect("/profile");
}

module.exports = function(app){
    app.use("/register", router);
};