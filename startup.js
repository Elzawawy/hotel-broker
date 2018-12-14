/**
 * description: create db mysql with name hotel_reservation
 */
async function startup() {
  var mysql = require("mysql");

  // create connection to mysql
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });

  // try to connect throw error if cannot connect
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  //query to create the database which we will add the tables to
  connection.query("CREATE DATABASE hotel_reservation", function(err, result) {
    if (err) console.log("Database exists!");
    else console.log("Database created!");
  });
}

startup();
module.exports = startup;
