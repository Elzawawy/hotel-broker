const router = require("express").Router();
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

async function logUserIn(req, res){
    let userInfo = [req.body.username];
    try {
        const user = await query.userQueries.userSelect.retrieveUser(userInfo);
        console.log("USERRR" + user.username);
        if(user.username === req.body.username){
            console.log("TRUE");
            console.log(user.password);
        }
        console.log("ROUTE");
    }catch (e) {
        console.log("ERRRORR " +e);
    }


}

module.exports = function(app) {
  app.use("/login", router);
};
