module.exports = function(req, res, params, callback) {
  // query to insert into hotel table.
  conn.query(hotelQueries.hotelSelect.getAllHotels, params, function(
    err,
    result,
    fields
  ) {
    CheckForError(err, result, "Hotel table select");
    callback(result);
  });
};
