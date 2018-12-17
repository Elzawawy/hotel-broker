//This file is to connect all database components together.
//Component 1 : ErrorHelper 
//Component 2 : Database Creation Queries.
//Component 3 : Table Creation Queries.
//Component 4 : Connection Object. 
CheckForError = require("./Helpers/ErrorHelper");
dbCreation = require("../mysqlQueries/DatabaseCreationQuery");
tableCreation = require("../mysqlQueries/TableCreationQueries");
conn = require("../connect")();

//Export Database and Tables queries. 
exports.databaseCreate = require("./DatabaseCreator");
exports.createUserTable = require("./UserTable");
exports.createHotelTable = require("./HotelTable");
exports.createRoomTable = require("./RoomTable");
exports.createRatesRelationTable = require("./RatesRelationTable");
exports.createReservationTable = require("./ReservationTable");
exports.createRequestsRelationTable = require("./requestRelationTable");

//Export Another alternative for Database and Tables Creation through one fucntion call.
exports.dbCompleteSetup = function(dbName) {
  exports.databaseCreate(dbName);
  exports.createUserTable();
  exports.createHotelTable();
  exports.createRoomTable();
  exports.createRatesRelationTable();
  exports.createReservationTable();
  exports.createRequestsRelationTable();
};
