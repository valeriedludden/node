var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  console.log("Received a request for /");

  res.write("This is the root.");
  res.end();
});

app.get("/home", function(req, res) {
  console.log("Received a request for the home page")

  res.render("home");
});

app.listen(5000, function() {
  console.log("The server is up and listening on port 5000");
});
