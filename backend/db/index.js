// we import the connection and call the function to create the connection and leave it open
const queryHandlers = require("./jsQueryHandlers");

exports.databaseCreate = queryHandlers.databaseCreate;
exports.createUserTable = queryHandlers.createUserTable;
exports.createHotelTable = queryHandlers.createHotelTable;
exports.createRoomTable = queryHandlers.createRoomTable;
exports.createRatesRelationTable = queryHandlers.createRatesRelationTable;
exports.createReservationTable = queryHandlers.createReservationTable;
exports.createRequestsRelationTable = queryHandlers.createRequestsRelationTable;
exports.dbCompleteSetup = queryHandlers.dbCompleteSetup;
