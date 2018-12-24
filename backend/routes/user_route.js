const router = require("express").Router();
const bcrypt = require("bcrypt");

/*......User Profile Routes..........*/
//Load this page when user is logged in
router.get("/",loadProfilePage);
//to handle logout request
router.get("/logout",logUserOut);
/*..................................*/
/*..............Edit Profile Routes..........*/
router.get("/edit_profile",loadEditProfilePage);
router.post("/edit_profile",editProfile);

function loadProfilePageCB(req,res,result) {
    let user = JSON.parse(result)[0];
    console.log(user);
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
  let newUserInfo = {};
  /***check for field user has entered***/
  if(req.body.username !== ''){
      newUserInfo.Username = req.body.username;
  }
  if(req.body.email !== ''){
      newUserInfo.Email = req.body.email;
  }
  if(req.body.name !== ''){
      newUserInfo.Name = req.body.name;
  }
  if(req.body.password !== ''){
      newUserInfo.Password = bcrypt.hashSync(req.body.password,10);
  }
  console.log(newUserInfo);
  //We need it as array for the query
  let newUserInfoInput = [newUserInfo,req.session.username];
  query.userQueries.userUpdate(req,res,newUserInfoInput);
  //change the username in the session
  if(req.body.username !== ''){
      req.session.username = req.body.username;
  }
  query.userQueries.userSelect.retrieveProfile(req,res,req.session.username,loadProfilePageCB);
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
