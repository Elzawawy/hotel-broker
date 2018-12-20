const router = require('express').Router;

router.get('/',getAllRequests);

/*
*
 */
function getAllRequests(req,res,next)
{
    ////tbd
}

module.exports = function(app){
    app.use("/hotelRequests", router);
};