/*
* This module is responsibe for connecting to the mysql database.
*/
const mysql = require("mysql");
//get configuration options from configuration module "localhost,user,password"
const options = require("./config");

const connection = mysql.createConnection(options);

/**
 * description: create and return connection to DB
 * note: need to be sync as other queries depend on the db creation
 */
function connect() {
  // We need to export our connection so making it a variable and exporting it
  if (!connection) {
    // try to connect throw error if cannot connect
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }

  return connection;
}

//export connect function from this module to use in other modules.
module.exports = connect;
