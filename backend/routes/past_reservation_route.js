const router = require("express").Router();

router.get("/", getReservations);
router.put("/", cancelReservation);

function getReservations(req, res) {
  //get the reservation for this user
  //return these reservations
}

function cancelReservation(req, res) {
  //cancel this particular reservation
}

module.exports = function(app) {
  app.use("/pastReservation", router);
};
