const router = require("express").Router();

router.get("/", getReservations);
router.post("/", cancelReservation);

function getReservations(req, res) {
  //get the reservation for this user
  //return these reservations
}

function cancelReservation(req, res) {
  //cancel this particular reservation
}

/*---------------Load Book Room Page-----------------*/
router.get("/:hotelName/:hotelBranch",loadBookRoomPage);

function loadBookRoomPage(req,res){
    res.render("pages/add_reservation",{role: req.session.role});
}
/*---------------------------------------------------*/
/*---------------Book Room Page-----------------*/
router.post("/:hotelName/:hotelBranch",BookRoomPage);
function BookRoomPageCB(req,res){
    res.redirect("/browse_Hotels");
}
function BookRoomPage(req,res){
    let params = {
        CustomerUser: req.session.username,
        HotelName: req.params.hotelName,
        HotelBranch: req.params.hotelBranch,
        StartDate: req.body.startDate,
        EndDate: req.body.endDate,
        Type: req.body.roomType
    };
    query.resQueries.resInsert.InsertReservation(params,BookRoomPage);
}
/*---------------------------------------------------*/
module.exports = function(app) {
  app.use("/reservations", router);
};
