//This file is to connect all database components together.
//Component 1 : ErrorHelper 
//Component 2 : Database Creation Queries.
//Component 3 : Table Creation Queries.
//Component 4 : Connection Object. 
CheckForError = require("./Helpers/ErrorHelper");
databaseDefinitionHandler = require("./DatabaseDefinitionHandler");
conn = require("../connect")();
//Export Another alternative for Database and Tables Creation through one fucntion call.

exports.databaseSetup = function(dbName) {
  databaseDefinitionHandler.databaseCreate(dbName);
  databaseDefinitionHandler.createUserTable();
  databaseDefinitionHandler.createHotelTable();
  databaseDefinitionHandler.createRoomTable();
  databaseDefinitionHandler.createRatesRelationTable();
  databaseDefinitionHandler.createReservationTable();
  databaseDefinitionHandler.createRequestsRelationTable();
  databaseDefinitionHandler.createcheckRoleProc();
  databaseDefinitionHandler.createBeforeInsertHotelTrig();
  databaseDefinitionHandler.createBeforeUpdateHotelTrig();
};
