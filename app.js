var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Welcome to Devops Demo Application test!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
