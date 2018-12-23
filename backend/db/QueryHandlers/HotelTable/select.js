module.exports = function(params) {
  // query to insert into hotel table.
  return conn.query(hotelQueries.hotelSelect, params, function(
    err,
    result,
    fields
  ) {
    CheckForError(err, result, "Hotel table select");
    console.log(result);
  });
};
