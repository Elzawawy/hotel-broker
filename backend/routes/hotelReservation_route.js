const router = require('express').Router;
var reservations;

router.get('/:hotelname/:hotelbranch',getAllRequests);
router.post('/:hotelname/:hotelbranch',approveDenyRequest);

function getAllRequests(req,res)
{
    //reservations = SQL QUERY TO RETRIEVE REQUESTS OF THIS HOTEL
    res.render("reservations_request",{reservations: reservations});
}

function approveDenyRequest(req,res) {
    res_id = req.body.id;
    if (req.body.button === 1) {
        //IN SQL MAKE THE RESERVATION STATUS APPROVED
    }

    if (req.body.button === 1) {
        //IN SQL DELETE THIS TUPLE OF RESERVATION
    }
    res.reload();
}

module.exports = function(app){
    app.use("/hotelRequests", router);
};