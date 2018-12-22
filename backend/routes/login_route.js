const router = require("express").Router();

router.get("/", loadLoginPage);
router.post("/",logUserIn);

function loadLoginPage(req, res) {
    if(req.session && req.session.user) {
        console.log(req.session.user);
        res.render("pages/profile",{user: req.session.user});
    }
    else{
        res.render("pages/login");
    }
}

function logUserIn(req, res){
    //we should check database if the user exist
    //if he does exist we return user data and put it in his session
    //if he doesn't exist we load the page again
    req.session.user = req.body;
    res.redirect("/profile");
}

module.exports = function(app) {
  app.use("/login", router);
};
