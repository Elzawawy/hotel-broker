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
app.use(bodyParser.json()); // Pars to json object

// Website Routes

// 404
// =============================================================================
app.use(function(req, res, next) {
  res.status(404).send({
    error: "404-Not found"
  });
});

// Error
// =============================================================================
app.use(function(err, _req, res, _next) {
  // TBD - for our own Error code handling
});
module.exports = app;
