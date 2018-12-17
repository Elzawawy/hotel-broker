// we import the connection and call the function to create the connection and leave it open
const conn = require("../connect")();

exports.databaseCreate = function(params) {
  // our db name is "hotel_reservation"
  conn.query(
    "CREATE DATABASE IF NOT EXISTS" +
      params +
      "CHARACTER SET utf8 COLLATE utf8_general_ci",
    function(err, result) {
      if (err)
        console.log(
          "Database exists or an issue so replace this statement with throw err"
        );
      else {
        console.log("Database created!");
      }
    }
  );

  conn.changeUser({ database: params }, function(err) {
    if (err)
      console.log(
        "Database connection set or an issue so replace this statement with throw err"
      );
    else console.log("database updated in connection");
  });
};

exports.createUserTable = function() {
  // our db name is "hotel_reservation"
  conn.query(
    `CREATE TABLE user (  
    username varchar(255) NOT NULL PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    user_password varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    phone varchar(255) UNIQUE NOT NULL,
    ssn varchar(255) UNIQUE NOT NULL,
    birthdate date NOT NULL,
    address varchar(255) NOT NULL,
    isClassA boolean NOT NULL DEFAULT 0,
    isBlacklisted boolean NOT NULL DEFAULT 0,
    isDeleted boolean NOT NULL DEFAULT 0,
    blacklisted_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE   CURRENT_TIMESTAMP,
    role ENUM('Broker', 'Owner', 'Customer') NOT NULL
  )`,
    function(err, result) {
      if (err)
        console.log(
          "User table create or an issue so replace this statement with throw err"
        );
      else console.log("User Table created!");
    }
  );
};
