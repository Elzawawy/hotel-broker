// Requiring Packages - Start
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const backend = require("./backend");
const backRoutes = require("./backend/app");
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
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// login page
/*app.get("/", function(req, res) {
  res.render("pages/login");
});*/

backRoutes(app);
backend(app);
