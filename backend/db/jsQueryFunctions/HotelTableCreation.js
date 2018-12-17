module.exports = function() {
  // query to create hoteltable
  conn.query(tableCreation.HotelTable, function(err, result) {
    CheckForError(err, result, "Hotel table");
  });
};
