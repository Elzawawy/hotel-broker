async function startup() {
  var mysql = require("mysql");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hotel_Reservation"
  });

  connection.connect();

  connection.query("SELECT 1", function(error, results, fields) {
    if (error) {
      throw error;
    } else {
      console.log("connected as id " + connection.threadId);
    }
    // connected!
  });
}

module.exports = startup;
