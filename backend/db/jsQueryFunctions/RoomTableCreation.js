module.exports = function() {
  // query to create Rooms
  conn.query(tableCreation.RoomTable, function(err, result) {
    CheckForError(err, result, "Room Table");
  });
};
