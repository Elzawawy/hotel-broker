databaseDefinitionQueries = require("../../Queries/DatabaseDefinition");
//Export Database and Tables queries.
exports.databaseCreate = require("./DatabaseCreate");
exports.createUserTable = require("./UserCreate");
exports.createHotelTable = require("./HotelCreate");
exports.createRoomTable = require("./RoomCreate");
exports.createRatesRelationTable = require("./RatesCreate");
exports.createReservationTable = require("./ReservationCreate");
exports.createRequestsRelationTable = require("./RequestsCreate");

//Export Triggers and Procedures.
exports.proceeds = require("./ProceduresHandler");
exports.trigs = require("./TriggersHandler");
