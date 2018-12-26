const router = require("express").Router();

/*-----------Show Owner's Hotels------------*/
router.get("/", getOwnerHotels);
function getOwnerHotelsCB(req,res,result){
    let hotels = JSON.parse(result);
    res.render("pages/owner_show_hotels",{hotels: hotels});
}
function getOwnerHotels(req, res) {
    let params = req.session.username;
    console.log(params);
    console.log("OWNER HOTELS");
    query.hotelQueriesHandler.hotelSelect.GetOwnerHotels(req,res,params,getOwnerHotelsCB);
}
/*-------------------------------------------*/

/*-----------Show Owner's Hotel--------------*/
router.get("/:hotelName/:hotelBranch",showOwnerHotel);
function showOwnerHotelCB(req,res,result){
    let rooms = JSON.parse(result);
    res.render("pages/owner_show_hotel",{rooms: rooms});
}

function showOwnerHotel(req,res){
    let params = [req.params.hotelName,req.params.hotelBranch];
    query.roomQueriesHandler.roomSelect.GetAllRooms(req,res,params,showOwnerHotelCB);
}
/*-------------------------------------------*/
module.exports = function(app) {
  app.use("/owner", router);
};
