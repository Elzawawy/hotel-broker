const router = require("express").Router();

router.post("/:user_id", addHotel);

function addHotel(req, res, next) {}

module.exports = function(app) {
  app.use("/hotels", router);
};
