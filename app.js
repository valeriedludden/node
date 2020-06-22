const express = require("express");
const PORT = process.env.PORT || 5000;
// const bodyParser = require("body-parser");
const app = express();

app.use(express.static('/public'));
// app.use(bodyParser.urlencoded({extended: true}));
app.set("views", "views");
app.set("view engine", "ejs");

// let rate = {
//   weight: 0,
//   mail: 'letter'
// };

app.get("/", function(req, res) {
  console.log("Received a request for /");


});

// app.get("/home", getPostage);
app.get("/home", function (req, res) {
  console.log("Received a request for the HOME page");
  res.render("/home")
  res.end()
});

// app.get("/rate", function(req, res){
//   console.log("Received a request for the rate page")
//   res.render("/rate", {rate: rate})
//   res.end();
// });

// app.post("/rate", function(req, res){
//   let weight = req.query.weight;
//   let mail = req.query.mail;
//   const params = {weight: weight, mail: mail};
//   res.render("/rate", params );
// });
// getPostage(res, req){
//   let weight = req.query.weight;
//   let mail = req.query.mail;
//   const params = {weight: weight, mail: mail};
//   postRates(res, weight, mail)
// }
//
// postRatesres(res, weight, mail){
//   const params = { weight: weight, mail:mail };
//   res.render('/rate', params)
//
// }
app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
