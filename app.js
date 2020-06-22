const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", "views");
app.set("view engine", "ejs");

let rate = {
  weight: 0,
  mail: 'letter'
};

app.get("/", function(req, res) {
  console.log("Received a request for /");


});

app.get("/home", function(req, res) {
  console.log("Received a request for the home page")
  res.render("home");
  res.end();

});
app.get("/rate", function(req, res){
  console.log("Received a request for the rate page")
  res.render("rate", {rate: rate})
  res.end();
});

app.post("/rate", function(req, res){
  let weight = req.body.weight;
  let mail = req.body.mail;
  rate = {weight: weight, mail: mail};
  res.redirect("/rate");
});

app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
