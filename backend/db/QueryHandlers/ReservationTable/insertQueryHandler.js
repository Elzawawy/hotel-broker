exports.InsertReservation = function (params, callback) {

  paramsSelect = [params.HotelName,
  params.HotelBranch,
  params.StartDate,
  params.EndDate,
  params.Type,
  params.HotelName,
  params.HotelBranch,
  params.Type];
  let roomNumber = {};
  params = conn.query(roomSelectQueries.getFreeRooms, paramsSelect, function (err, result, fields) {
    console.log(fields);
    roomNumber=JSON.parse(JSON.stringify(result));
  });
paramsSelect.RoomNumber = roomNumber.Number;
  // query to insert into User table.
  conn.query(resQueries.resInsertQuery, paramsSelect, function (err, result, fields) {
    CheckForError(err, result, "Reservation table insert");
    console.log(fields);
    callback(result);
  });
};
