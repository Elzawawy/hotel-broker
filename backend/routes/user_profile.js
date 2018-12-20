const router = require("express").Router;

router.get("/:username", getUser);
/*
 *
 *
 *
 */
function getuser(req, res, next) {
  //get the user that is logged in
  // res.render('user_profile.ejs'); that is logged in
}

module.exports = function(app) {
  app.use("/user_profile", router);
};
