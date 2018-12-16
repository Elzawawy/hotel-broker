// we import the connection and call the function to create the connection and leave it open
const conn = require("../connect")();

exports.databaseCreate = function(params) {
  // our db name is "hotel_reservation"
  conn.query(
    "CREATE DATABASE" + params + "CHARACTER SET utf8 COLLATE utf8_general_ci",
    function(err, result) {
      if (err) console.log("Database exists!");
      else console.log("Database created!");
    }
  );
};
