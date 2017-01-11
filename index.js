var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;

var scriptures = {};
var fs = require('fs');
fs.readFile('public/scriptures/text.json', 'utf8', function(err, data) { scriptures = JSON.parse(data); });


var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/scriptures/:book/:chapter/:verses', function(req, res, next) {
  var chapter = req.params.chapter;
  res.status(200).json(scriptures.Genesis[chapter]);
});

app.listen(port, function() {
  console.log("Port " + port + " is listening...");
});
