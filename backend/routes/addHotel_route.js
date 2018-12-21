const router = require("express").Router();

router.post("/", addHotel);

function addHotel(req, res) {
  //add new hotel in the database
}

module.exports = function(app) {
  app.use("/add_hotel", router);
};
