var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/login', function (req, res) {
  // check if response in db
  // if so, send along to dashboard
  // if not, tell them bad login and redirect to this route
  //res.sendFile(__dirname + "/public/" + "dashboard.html");
  res.send("ok");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
