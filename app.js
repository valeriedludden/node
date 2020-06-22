var express = require("express");
const PORT = process.env.PORT || 5000;

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
  res.end();
});

app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
