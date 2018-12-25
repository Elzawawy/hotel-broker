exports.showAllHotels = function(req, res, callback) {
  // query to insert into hotel table.
  conn.query(hotelQueries.hotelSelect.getAllHotels, function(
    err,
    result,
  ) {
    CheckForError(err, result, "Hotel table select");
    callback(req,res,JSON.stringify(result));
  });
};

exports.showSuspendedHotels = function(req, res, callback) {
    // query to insert into hotel table.
    conn.query(hotelQueries.hotelSelect.getsuspendedHotels, function(
        err,
        result,
    ) {
        CheckForError(err, result, "Hotel table select");
        callback(req,res,JSON.stringify(result));
    });
};