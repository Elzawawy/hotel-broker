const router = require("express").Router();

router.get("/", getOwnerHotels);

function getOwnerHotels(req, res) {
  //get this owner hotels
  //return the hotels
}

module.exports = function(app) {
  app.use("/owner_hotels", router);
};
