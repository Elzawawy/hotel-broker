module.exports.BeforeInsertHotelTrig = function() {
    // query to create check_role procedure.
    conn.query(databaseDefinitionQueries.beforeInsertHotelTrig, function(err, result) {
      CheckForError(err, result, "Before Insert on Hotel Trigger ");
    });
};

module.exports.BeforeUpdateHotelTrig = function() {
    // query to create check_role procedure.
    conn.query(databaseDefinitionQueries.beforeUpdateHotelTrig, function(err, result) {
      CheckForError(err, result, "Before Update on Hotel Trigger ");
    });
};