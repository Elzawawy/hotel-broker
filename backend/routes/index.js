const login = require("./login_route");

module.exports = function routesBinder(app) {
    login(app);
}