const router = require("express").Router();

router.get("/", loadUserProfilePage);
router.get("/:username", getUser);

function loadUserProfilePage(req, res) {
  res.render("pages/user_profile");
}
function getUser(req, res, next) {}

module.exports = function(app) {
  app.use("/user_profile", router);
};
