const express = require("express");
const PORT = process.env.PORT || 5000;
// const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  console.log("Received a request for /");
  res.render("home");
  res.end();
});

app.get("/home", function(req, res) {
  console.log("Received a request for the home page")
  res.render("home");
  res.end();

});
// app.get("/rate", function(req, res){
//   console.log("Received a request for the rate page")
//   res.render("rate", {rate: rate})
// });

// app.post("/rate", function(req, res){
//   let weight = req.body.weight;
//   let mail = req.body.mail;
//   // let newRate = {name: name, image: image};
//   res.redirect("/rate");
// });

app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
