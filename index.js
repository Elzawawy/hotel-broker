// Requiring Packages - Start
const express = require("express");
const bodyParser = require("body-parser");
// Requiring Packages - End

// configure app
const app = express(); // define our app using express

app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // For parsing URL encoded Data
app.use(bodyParser.json()); // Parse to json object

//Use to the EJS Templating Engine for dynamic enjection of data into views.
app.set("view engine", "ejs");

module.exports = app;
