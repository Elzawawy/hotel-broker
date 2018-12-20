exports.checkRole = function() {
  // query to create check_role procedure.
  conn.query(databaseDefinitionQueries.proceeds.checkRole, function(
    err,
    result
  ) {
    CheckForError(err, result, "check_role Procedure");
  });
};
