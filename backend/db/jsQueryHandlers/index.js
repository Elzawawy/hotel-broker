CheckForError = require("./Helpers/ErrorHelper");
dbCreation = require("../mysqlQueries/DatabaseCreationQuery");
tableCreation = require("../mysqlQueries/TableCreationQueries");
conn = require("../connect")();

exports.databaseCreate = require("./DatabaseCreator");
exports.createUserTable = require("./UserTable");
exports.createHotelTable = require("./HotelTable");
exports.createRoomTable = require("./RoomTable");
exports.createRatesRelationTable = require("./RatesRelationTable");
exports.createReservationTable = require("./ReservationTable");
exports.createRequestsRelationTable = require("./requestRelationTable");

exports.dbCompleteSetup = function(dbName) {
  exports.databaseCreate(dbName);
  exports.createUserTable();
  exports.createHotelTable();
  exports.createRoomTable();
  exports.createRatesRelationTable();
  exports.createReservationTable();
  exports.createRequestsRelationTable();
};
