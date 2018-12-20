const router = require('express').Router;

router.get('/',getAllHotels);

function getAllHotels(req,res)
{
    //hotels = Get Premium Hotles (SELECT WHERE QUERY)
    //hotels.push(get Not Premium HOTELS)
    //and return two arrays and show the premium first
    // res.render("browse_hotels",{hotels: hotels});
}


module.exports = function(app){
    app.use("/browseHotels", router);
};