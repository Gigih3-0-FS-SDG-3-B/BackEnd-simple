var express = require('express');
var app = express();app.get('/', function (req, res) {
  res.send('Hallo ini Untuk test simple server make node js ya!! ');
});app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});