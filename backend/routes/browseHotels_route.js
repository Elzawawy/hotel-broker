const router = require('express').Router();

router.get('/',getAllHotels);

function getAllHotels(req,res)
{
    res.render("pages/browse_hotels");
}


module.exports = function(app){
    app.use("/browse_hotels", router);
};