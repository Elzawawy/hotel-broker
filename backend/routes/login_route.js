const router = require("express").Router();

router.get("/", loadLoginPage);
router.post("/", loginUser);

function loadLoginPage(req, res) {
  res.render("pages/login");
}

function loginUser(req, res, next) {

}

module.exports = function(app) {
  app.use("/login", router);
};
