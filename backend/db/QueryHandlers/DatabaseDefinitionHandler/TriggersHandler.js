exports.BeforeInsertHotelTrig = function() {
  // query to create check_role procedure.
  conn.query(databaseDefinitionQueries.trigs.RoleBeforeInsertTrigger, function(
    err,
    result
  ) {
    CheckForError(err, result, "Before Insert on Hotel Trigger ");
  });
};

exports.BeforeUpdateHotelTrig = function() {
  // query to create check_role procedure.
  conn.query(databaseDefinitionQueries.trigs.RoleBeforeUpdateTrigger, function(
    err,
    result
  ) {
    CheckForError(err, result, "Before Update on Hotel Trigger ");
  });
};
