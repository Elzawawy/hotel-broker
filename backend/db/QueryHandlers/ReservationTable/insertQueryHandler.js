module.exports = function(params,callback) {
  
    conn.query(roomSelectQueries.getFreeRooms,paramsSelect,function(err, result, fields) {
      CheckForError(err, result, "User table insert");
      console.log(fields);
      callback(result);
    });

    // query to insert into User table.
    conn.query(resQueries.resInsertQuery, params, function(err, result, fields) {
      CheckForError(err, result, "User table insert");
      console.log(fields);
      callback(result);
    });
};
