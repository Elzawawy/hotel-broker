exports.checkRole = function() {
  // query to create check_role procedure.
  conn.query(databaseDefinitionQueries.proceeds.checkRole, function(
    err,
    result
  ) {
    CheckForError(err, result, "check_role Procedure");
  });
};

exports.checkReservation = function() {
  // query to create check_role procedure.
  conn.query(databaseDefinitionQueries.proceeds.checkReservationRoomType, function(
    err,
    result
  ) {
    CheckForError(err, result, "check_reservation Procedure");
  });
};



