const connect = require("./connect");
const app = require("./app");

const hostname = "127.0.0.1";
const port = process.env.port || 3000;

app.listen(port, hostname, function() {
  console.log("server is up and running");
  connect();
});
