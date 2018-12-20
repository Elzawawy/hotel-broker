const router = require('express').Router();
router.get('/',loadRegisterPage);
router.post('/',registerUser);

function loadRegisterPage(req,res){
    res.render("pages/register");
}

function registerUser(req,res)
{

}

module.exports = function(app){
    app.use("/register", router);
};