const router = require("express").Router;

router.put("/:username", getUser);
/*
 *
 *
 *
 */
function changePassword(req, res, next) {
  //change the password of the user
  // res.render('edit_profile.ejs');
}

module.exports = function(app) {
  app.use("/user_profile", router);
};
