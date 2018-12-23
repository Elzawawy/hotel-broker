const router = require("express").Router();

/*......User Profile Routes..........*/
//Load this page when user is logged in
router.get("/",loadProfilePage);
query = require("../db/QueryHandlers");

//to handle logout request
router.get("/logout",logUserOut);
/*..................................*/
/*..............Edit Profile Routes..........*/
router.get("/edit_profile",loadEditProfilePage);
router.post("/edit_profile",editProfile);

function loadProfilePageCB(req,res,result) {
    let user = JSON.parse(result)[0];
    req.session.role = user.Role;
    res.render("pages/profile",{user: user});
}

function loadProfilePage(req,res){
    if(req.session && req.session.username) {
        console.log(req.session.username);
        query.userQueries.userSelect.retrieveProfile(req,res,req.session.username,loadProfilePageCB);
    }
    else{
      res.redirect("/login");
    }

}

function editProfile(req,res){
  req.session.user.username = req.body.username;
  res.render("pages/profile",{user:req.session.user});
}

function loadEditProfilePage(req,res){
  res.render("pages/edit_profile");
}

function logUserOut(req,res){
    req.session.reset();
    res.redirect('/login');
}


module.exports = function(app) {
  app.use("/profile", router);
};
