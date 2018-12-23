module.exports = function(params,callback) {
    // query to insert into User table.
    conn.query(resQueries.resInsertQuery, params, function(err, result, fields) {
      CheckForError(err, result, "User table insert");
      console.log(fields);
      callback(result);
    });
};