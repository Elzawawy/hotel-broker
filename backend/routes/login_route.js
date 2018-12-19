const router = require('express').Router();

router.get('./views/login.ejs',loginUser);

  
function loginUser(req, res, next)
{

}


module.exports = function(app){
    app.use("/login", router);
}
