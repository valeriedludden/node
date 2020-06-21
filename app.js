// var express = require("express");
//
// var app = express();
//
// app.use(express.static("public"));
//
// app.set("views", "views");
// app.set("view engine", "ejs");
//
// app.get("/", function(req, res) {
//   console.log("Received a request for /");
//
//   res.write("This is the root.");
//   res.end();
// });
//
// app.get("/home", function(req, res) {
//   console.log("Received a request for the home page")
//
//   res.render("home");
// });
//
// app.listen(5000, function() {
//   console.log("The server is up and listening on port 5000");
// });
const express = require('express')
var app = express();	const path = require('path')

const PORT = process.env.PORT || 5000
app.set('port', (process.env.PORT || 5000));

express()
app.use(express.static(__dirname + '/public'));	  .use(express.static(path.join(__dirname, 'public')))

    .set('views', path.join(__dirname, 'views'))
// views is directory for all template files	  .set('view engine', 'ejs')
app.set('views', __dirname + '/views');	  .get('/', (req, res) => res.render('pages/index'))
app.set('view engine', 'ejs');	  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

