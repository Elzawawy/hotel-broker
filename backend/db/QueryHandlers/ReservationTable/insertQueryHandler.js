module.exports = function(params,callback) {

  paramsSelect = 
  { HotelName: params.HotelName,
                  HotelBranch : params.HotelBranch,
                  RoomNumber : params.RoomNumber,
                  EndDate : params.EndDate,
                  StartDate : params.StartDate};

    conn.query(roomSelectQueries.getFreeRooms,paramsSelect,function(err, result, fields) {
      console.log(fields);
    });

    // query to insert into User table.
    conn.query(resQueries.resInsertQuery, params, function(err, result, fields) {
      CheckForError(err, result, "User table insert");
      console.log(fields);
      callback(result);
    });
};
