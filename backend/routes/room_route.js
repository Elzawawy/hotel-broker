const router = require("express").Router();
const query = require("../db/QueryHandlers");

router.get("/:hotelname/:hotelbranch", getRooms);
router.post("/:hotelname/:hotelbranch/:number", bookRoom);

function getRooms(req, res) {
  let hotelname = req.params.hotelname;
  let hotelbranch = req.params.hotelbranch;
  console.log(hotelname);
  console.log(hotelbranch);
  let rooms = [
    {
      number: 200,
      isbooked: true
    },
    {
      number: 202,
      isbooked: false
    }
  ];
  try {
    for (var i = 0; i < rooms.length; i++) {
      console.log(rooms[i].number);
    }
    //search for rooms of that hotel
    res.render("pages/rooms", { rooms: rooms });
  } catch (error) {}
}

function bookRoom(req, res) {
  //get the room state and change it and update the database
  //res.reload();
  response.redirect(request.get("referer"));
}

module.exports = function(app) {
  app.use("/rooms", router);
};
