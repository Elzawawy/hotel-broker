databaseDefinitionQueries = require("../../Queries/DatabaseDefinition");
//Export Database and Tables queries. 
exports.databaseCreate = require("./DatabaseCreate");
exports.createUserTable = require("./UserCreate");
exports.createHotelTable = require("./HotelCreate");
exports.createRoomTable = require("./RoomCreate");
exports.createRatesRelationTable = require("./RatesCreate");
exports.createReservationTable = require("./ReservationCreate");
exports.createRequestsRelationTable = require("./RequestsCreate");
//Require Procedures and Triggers Handlers.
const ProceduresHandler = require("./ProceduresHandler");
const TriggersHandler = require("./TriggersHandler");
//Export Triggers and Procedures. 
exports.createcheckRoleProc = ProceduresHandler.checkRole;
exports.createBeforeInsertHotelTrig = TriggersHandler.BeforeInsertHotelTrig;
exports.createBeforeUpdateHotelTrig = TriggersHandler.BeforeUpdateHotelTrig;