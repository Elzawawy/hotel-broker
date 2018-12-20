// getting query handlers
const query = require("../db/QueryHandlers");

//getting router
router = require("express").Router();

// requiring routes
const login = require("./login_route");
const register = require("./register_route");
const browseHotels = require("./browseHotels_route");
const hotel = require("./hotel");

// Exporting Binded pages
module.exports = function routesBinder(app) {
  login(app);
  register(app);
  browseHotels(app);
};
