//File Respoible for User Table Creation.
module.exports = function() {
  //query to create user table
  conn.query(databaseDefinitionQueries.userCreate, function(err, result) {
    CheckForError(err, result, "User Table");
  });
};
