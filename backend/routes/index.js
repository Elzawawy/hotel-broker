// getting query handlers
const query = require("../db/QueryHandlers");

//getting router
const router = require("express").Router();

router.get("/",function(req,res){
    if(req.session && req.session.user) {
        console.log("user already logged in");
        res.redirect("/browse_hotels");
    }
    else{
        console.log("not logged in");
        res.render("pages/home");
    }
});
// requiring routes
const login = require("./login_route");
const register = require("./register_route");
const browseHotels = require("./browseHotels_route");
const users = require("./user_route");
const hotel = require("./hotel");


// Exporting Binded pages
module.exports = function routesBinder(app) {

  app.use("/",router);
  login(app);
  register(app);
  browseHotels(app);
  users(app);
};
