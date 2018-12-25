//File Responsible for Room Table Creation.
const seedQuery = require("../../seed/RoomTableSeed");

module.exports = function() {
  // query to create Room.
  conn.query(databaseDefinitionQueries.roomCreate, function(err, result) {
    CheckForError(err, result, "Room Table");
  });

  conn.query(seedQuery, function(err, result, fields) {
    CheckForError(err, result, "Room Seed");
  });
};
