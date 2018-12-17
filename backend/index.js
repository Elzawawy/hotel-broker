// connection to mysql
const connect = require("./connect");

// our backend app
const app = require("./app");

// our database creation query
const dbQueries = require("./db");

const hostname = "127.0.0.1";
const port = process.env.port || 3000;

app.listen(port, hostname, function() {
  console.log("server is up and running");

  connect();

  dbQueries.databaseCreate("hotel_reservation");
  dbQueries.createUserTable();
  dbQueries.createHotelTable();
  dbQueries.createRoomTable();
  dbQueries.createRatesRelationTable();
  dbQueries.createReservationTable();
  dbQueries.createRequestsRelationTable();
});
