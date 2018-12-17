module.exports = function() {
  //query to create user table
  conn.query(tableCreation.UserTable, function(err, result) {
    CheckForError(err, result, "User Table");
  });
};
