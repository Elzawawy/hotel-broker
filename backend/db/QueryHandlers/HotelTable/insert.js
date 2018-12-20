module.exports = function(params) {
  // query to insert into hotel table.
  conn.query(hotelQueries.hotelInsert, params, function(err, result, fields) {
    CheckForError(err, result, "Hotel table insert");
    console.log(fields);
  });
};
