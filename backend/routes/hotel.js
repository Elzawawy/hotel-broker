const router = require("express").Router();

router.post("/:username", addHotel);

function addHotel(req, res, next) {
  let { username } = req.params;
  try {
  } catch (error) {}
}

module.exports = function(app) {
  app.use("/hotels", router);
};
