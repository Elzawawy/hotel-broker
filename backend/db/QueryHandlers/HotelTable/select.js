exports.showBrokerHotels = function(req, res,params,callback) {
  // query to insert into hotel table.
  conn.query(hotelQueries.hotelSelect.getBrokerHotels,params, function(
    err,
    result,
  ) {
    CheckForError(err, result, "Hotel table select");
    callback(req,res,JSON.stringify(result));
  });
};

exports.showSuspendedHotels = function(req, res,params, callback) {
    // query to insert into hotel table.
    conn.query(hotelQueries.hotelSelect.getBrokerSuspendedHotels,params, function(
        err,
        result,
    ) {
        CheckForError(err, result, "Hotel table select");
        callback(req,res,JSON.stringify(result));
    });
};

exports.ShowHotelRequests = function(req, res, callback) {
    // query to insert into hotel table.
    conn.query(hotelQueries.hotelSelect.getHotelRequests, function(
        err,
        result,
    ) {
        CheckForError(err, result, "Hotel Requests");
        callback(req,res,JSON.stringify(result));
    });
};