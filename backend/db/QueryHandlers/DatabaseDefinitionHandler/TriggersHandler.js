exports.BeforeInsertHotelTrig = function() {
  // query to create before insert on hotel trigger.
  conn.query(databaseDefinitionQueries.trigs.RoleBeforeInsertTrigger, function(
    err,
    result
  ) {
    CheckForError(err, result, "Before Insert on Hotel Trigger ");
  });
};

exports.BeforeUpdateHotelTrig = function() {
  // query to create before update on hotel trigger.
  conn.query(databaseDefinitionQueries.trigs.RoleBeforeUpdateTrigger, function(
    err,
    result
  ) {
    CheckForError(err, result, "Before Update on Hotel Trigger ");
  });
};

exports.BeforeInsertResTrig = function() {
   // query to create before insert on reservation trigger.
   conn.query(databaseDefinitionQueries.trigs.TypeBeforeInsertTrigger, function(
    err,
    result
  ) {
    CheckForError(err, result, "Before Update on Reservation Trigger ");
  });
};

exports.BeforeUpdateResTrig = function() {
  // query to create before insert on reservation trigger.
  conn.query(databaseDefinitionQueries.trigs.TypeBeforeUpdateTrigger, function(
   err,
   result
 ) {
   CheckForError(err, result, "Before Update on Reservation Trigger ");
 });
};

exports.BeforeInsertRoomTrig = function() {
  // query to create before insert on reservation trigger.
  conn.query(databaseDefinitionQueries.trigs.checkedOutBeforeInsertTrigger, function(
   err,
   result
 ) {
   CheckForError(err, result, "Before Insert on Room Trigger ");
 });
};

exports.BeforeUpdateRoomTrig = function() {
  // query to create before insert on reservation trigger.
  conn.query(databaseDefinitionQueries.trigs.checkedOutBeforeUpdateTrigger, function(
   err,
   result
 ) {
   CheckForError(err, result, "Before Update on Room Trigger ");
 });
};


