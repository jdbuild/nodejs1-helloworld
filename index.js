var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));



app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log("hello world");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
