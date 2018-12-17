// we import the connection and call the function to create the connection and leave it open
const conn = require("../connect")();
const tablesCreation = require("./queries/TableCreationQueries");

exports.databaseCreate = function(params) {
  // our db name is "hotel_reservation"
  conn.query(
    "CREATE DATABASE IF NOT EXISTS " +
      params +
      " CHARACTER SET utf8 COLLATE utf8_general_ci",
    function(err, result) {
      CheckForError(err, result, params + " Database");
    }
  );

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
  // query to create hoteltable
  conn.query(tablesCreation.RoomTable, function(err, result) {
    CheckForError(err, result, "Room Table");
  });
};

exports.createRatesRelationTable = function() {
  // query to create Reservation
  conn.query(tablesCreation.RatesRelationTable, function(err, result) {
    CheckForError(err, result, "Rate Relation Table");
  });
};

exports.createRequestRelationTable = function() {
  // query to create request relation
  conn.query(
    `CREATE TABLE requestsRelation(
    res_id INT NOT NULL PRIMARY KEY,
    customer_user varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    CONSTRAINT FK_REQUESTS_RES FOREIGN KEY (res_id) REFERENCES reservation(res_id),
    CONSTRAINT FK_REQUESTS_USER FOREIGN KEY  (customer_user) REFERENCES user(username),
    CONSTRAINT FK_REQUESTS_HOTEL FOREIGN KEY (hotel_number,hotel_branch) REFERENCES hotel(hotel_number,hotel_branch)
);`,
    function(err, result) {
      if (err)
        console.log(
          "Request Relation table create or an issue so replace this statement with throw err"
        );
      else console.log("Request Relation Table created!");
    }
  );
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
