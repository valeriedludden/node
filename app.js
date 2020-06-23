const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", "views");
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  console.log("Received a request for /");


});

// app.get("/home", getPostage);
app.get("/home", function (req, res) {
  console.log("Received a request for the HOME page");
  res.render("home")
  res.end()
});

app.post("/rate", function(req, res){
  console.log("Received a request for the rate page")
  getPostage(res, req)

});

// app.post("/rate", function(req, res){
//   let weight = req.query.weight;
//   let mail = req.query.mail;
//   const params = {weight: weight, mail: mail};
//   res.render("/rate", params );
// });
function getPostage(res, req) {
  let weight = req.body.weight;
  let mail = req.body.mail;
  postRates(res, weight, mail)
}

function postRates(res, weight, mail){
  let price = 0;
  if(mail === 'Letters Stamped'){
    if(weight > 3.0){
      price = 1.00;
    }
    else if(weight > 2){
      price = 0.85;
    }
    else if(weight > 1){
      price = 0.85;
    }
    else if(weight >= 0){
      price = 0.7;
    }
  }
  else if(mail === 'Letters Metered'){
    if(weight > 3.0){
      price = 0.95;
    }
    else if(weight > 2){
      price = 0.8;
    }
    else if(weight > 1){
      price = 0.65;
    }
    else if(weight > 0){
      price = 0.5;
    }

  }
  else if(mail === 'Large Envelopes'){
    if(weight > 12){
      price = 3.4;
    }
    else if(weight > 11){
      price = 3.2;
    }
    else if(weight > 10){
      price = 3.0;
    }
    else if(weight > 9){
      price = 2.8;
    }
    else if(weight > 8){
      price = 2.60;
    }
    else if(weight > 7){
      price = 2.4;
    }
    else if(weight > 6){
      price = 2.2;
    }
    else if(weight > 5){
      price = 2;
    }
    else if(weight > 4){
      price = 1.8;
    }
    else if(weight > 3){
      price = 1.6;
    }
    else if(weight > 2){
      price = 1.4;
    }
    else if(weight > 1){
      price = 1.2;
    }
    else if(weight > 0){
      price = 1.0;
    }

  }
  else if(mail === 'First Class Package Service'){
   if(weight > 16){
      price = 10.75;
    }
   else if(weight > 13){
     price = 8.85;
   }
   else if(weight > 12){
     price = 6.05;
   }
   else if(weight > 11){
     price = 5.85;
   }
   else if(weight > 10){
     price = 5.65;
   }
   else if(weight > 9){
     price = 5.45;
   }
   else if(weight > 8){
     price = 5.25;
   }
   else if(weight > 7){
     price = 5.05;
   }
   else if(weight > 6){
     price = 4.85;
   }
   else if(weight > 5){
     price = 4.65;
   }
   else if(weight > 4){
     price = 4.45;
   }
   else if(weight > 3){
     price = 4.25;
   }
   else if(weight > 2){
     price = 4.05;
   }
   else if(weight > 1){
     price = 3.85;
   }
   else if(weight > 0){
     price = 3.65;
   }

  }

  const params = { weight: weight, mail:mail, price: price};
  res.render('rate', params);
  res.end();

}
app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
