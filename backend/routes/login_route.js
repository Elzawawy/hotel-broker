const router = require("express").Router();
const bcrypt = require("bcrypt");
query = require("../db/QueryHandlers");
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

function callback(req,res,result){
    console.log(JSON.stringify(result[0]));
    console.log(result[0].Password);
    
    if(bcrypt.compareSync(req.body.password,result[0].Password)){
        console.log("Correct Password");
        req.session.user = req.body;
        res.redirect("/profile");
    }

    else{
        console.log("Incorrect Password");
        res.redirect("/login");
    }


}


function logUserIn(req, res){
    let userInfo = [req.body.username];
    query.userQueries.userSelect.retrieveUser(req,res,userInfo,callback);
}

module.exports = function(app) {
  app.use("/login", router);
};
