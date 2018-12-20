const login = require("./login_route");
const register = require("./register_route");
module.exports = function routesBinder(app) {
    login(app);
    register(app);
};