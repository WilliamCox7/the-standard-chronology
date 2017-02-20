var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;

var scriptures = {};
var fs = require('fs');
fs.readFile('public/scriptures/genesis.json', 'utf8', function(err, data) { scriptures.Genesis = JSON.parse(data); });

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/scriptures/:book/:chapter/:verses', function(req, res, next) {
  var book = req.params.book;
  var chapter = req.params.chapter;
  var verses = req.params.verses.split("-");
  var content = scriptures[book][book][chapter];
  res.status(200).json(content);
});

app.listen(port, function() {
  console.log("Port " + port + " is listening...");
});
