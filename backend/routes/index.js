const query = require("../db/QueryHandlers");

// requiring routes
const login = require("./login_route");
const register = require("./register_route");
const browseHotels = require("./browseHotels_route");

// Exporting Binded pages
module.exports = function routesBinder(app) {
  login(app);
  register(app);
  browseHotels(app);
};
