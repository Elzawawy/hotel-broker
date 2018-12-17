// we import the connection and call the function to create the connection and leave it open
const conn = require("../connect")();
const tablesCreation = require("./mysqlQueries/TableCreationQueries");
const dbCreation = require("./mysqlQueries/DatabaseCreationQuery");

exports.databaseCreate = function(params) {
  // our db name is "hotel_reservation", but we can modify it by sending another name
  conn.query(dbCreation.HotelReservationDB(params), function(err, result) {
    CheckForError(err, result, params + " Database");
  });

  conn.changeUser({ database: params }, function(err) {
    if (err)
      console.log(
        "Database connection set or an issue so replace this statement with throw err"
      );
    else console.log("database updated in connection");
  });
};

exports.createUserTable = function() {
  //query to create user table
  conn.query(tablesCreation.UserTable, function(err, result) {
    CheckForError(err, result, "User Table");
  });
};

exports.createHotelTable = function() {
  // query to create hoteltable
  conn.query(tablesCreation.HotelTable, function(err, result) {
    CheckForError(err, result, "Hotel table");
  });
};

exports.createRoomTable = function() {
  // query to create Rooms
  conn.query(tablesCreation.RoomTable, function(err, result) {
    CheckForError(err, result, "Room Table");
  });
};

exports.createRatesRelationTable = function() {
  // query to create RatesRelation
  conn.query(tablesCreation.RatesRelationTable, function(err, result) {
    CheckForError(err, result, "Rate Relation Table");
  });
};

exports.createReservationTable = function() {
  // query to create Reservations Table
  conn.query(tablesCreation.ReservationTable, function(err, result) {
    CheckForError(err, result, "Reservations Table");
  });
};

exports.createRequestsRelationTable = function() {
  // query to create Requests Relation Table
  conn.query(tablesCreation.RequestsRelationTable, function(err, result) {
    CheckForError(err, result, "Requests Relation Table");
  });
};

function CheckForError(err, result, name) {
  if (err && err.sqlMessage.toString().match("already exists")) {
    console.log(err.sqlMessage);
  } else if (err) throw err.sqlMessage;
  else console.log(name + " created!");
}

exports.CreateAllTables = function CreateAllTables() {
  exports.createUserTable();
  exports.createHotelTable();
  exports.createRoomTable();
  exports.createRatesRelationTable();
};
