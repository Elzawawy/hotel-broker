const router = require("express").Router();

router.get("/", getRooms);
router.put("/:hotelname/:hotelbranch/:number", bookRoom);

function getRooms(req, res) {
  //get rooms and return the array
  res.render("rooms", { room: rooms });
}

function bookRoom(req, res) {
  //get the room state and change it and update the database
  //res.reload();
}

module.exports = function(app) {
  app.use("/rooms", router);
};
