const mysql = require("mysql");
let connection;

/**
 * description: create and return connection to DB
 * note: need to be sync as other queries depend on the db creation
 */
function connect() {
  // We need to export our connection so making it a variable and exporting it

  if (!connection) {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: ""
    });
    // try to connect throw error if cannot connect
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }
  return connection;
}

module.exports = connect;
