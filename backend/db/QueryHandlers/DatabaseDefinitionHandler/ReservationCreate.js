const seedQuery = require("../../seed/ReservationsTableSeed");

//File Respnosible for Reservation Table Creation.
module.exports = function() {
  // query to create Reservations Table
  conn.query(databaseDefinitionQueries.reservationCreate, function(
    err,
    result
  ) {
    CheckForError(err, result, "Reservations Table");
  });

  conn.query(seedQuery, function(err, result, fields) {
    CheckForError(err, result, "Reservations Seed");
  });
};
