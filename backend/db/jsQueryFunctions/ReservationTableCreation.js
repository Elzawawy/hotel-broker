module.exports = function() {
  // query to create Reservations Table
  conn.query(tableCreation.ReservationTable, function(err, result) {
    CheckForError(err, result, "Reservations Table");
  });
};
