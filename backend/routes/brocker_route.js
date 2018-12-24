const router = require("express").Router();

router.get("/",loadBrockerPage);
router.get("/showHotels",loadAllHotels);
// router.get("/classAUsers",loadClassAUsers);

function loadBrockerPage(req,res){
    if(req.session.role !== "Broker"){
        console.log("Get The Hell Out");
        res.redirect("/login");
    }
    else{
        res.render("pages/broker");
    }
}

function loadAllHotelsCB(req,res,result){
    let hotels = JSON.parse(result);
    console.log(hotels);
    res.render("pages/broker_show_hotels",{hotels: hotels});
}

function loadAllHotels(req,res){
    query.hotelQueriesHandler.hotelSelect.showAllHotels(req,res,loadAllHotelsCB);
}

// function loadClassAUsersCB(req,res,result){
//
// }
//
// function loadClassAUsers(req,res){
//     query.
// }


module.exports = function(app) {
    app.use("/broker", router);
};
