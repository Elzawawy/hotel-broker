CheckForError = require("./ErrorHelper");
dbCreation = require("../mysqlQueries/DatabaseCreationQuery");
tableCreation = require("../mysqlQueries/TableCreationQueries");
conn = require("../../connect")();

exports.databaseCreate = require("./DatabaseCreation");
exports.createUserTable = require("./UserTableCreation");
exports.createHotelTable = require("./HotelTableCreation");
exports.createRoomTable = require("./RoomTableCreation");
exports.createRatesRelationTable = require("./RatesRelationTableCreation");
exports.createReservationTable = require("./ReservationTableCreation");
exports.createRequestsRelationTable = require("./RequestRelationTableCreation");
