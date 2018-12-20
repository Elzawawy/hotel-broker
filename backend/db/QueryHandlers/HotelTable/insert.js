module.exports = function(params) {
  // query to insert into hotel table.
  conn.query(hotelQueries, function(err, result) {
    CheckForError(err, result, "Hotel table insert");
  });
};
