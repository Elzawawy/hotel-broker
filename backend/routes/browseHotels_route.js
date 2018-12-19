const router = require('express').Router;

router.get('/',getAllHotels);
router.get('/:hotelName/:hotelBranch',getSelectedHotel);
/*
*
*
*
 */
function getAllHotels(req,res,next)
{
    //Get Premium Hotles (SELECT WHERE QUERY)
    //get Not Premium HOTELS
    //and return two arrays and show the premium first
}

function getSelectedHotel(req,res,next)
{
    //SELECT HOTEL FROM DATABASE
    // res.render('hotelview')
}

module.exports = function(app){
    app.use("/browseHotels", router);
};