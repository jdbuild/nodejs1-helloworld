var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 80));
app.use(express.static('public'));




app.get('/', function (req, res) {
  res.send('Hello World2!');
  console.log("hello world2");
});


app.get('/file', function (req, res) {
        res.sendFile(__dirname + '/public/test.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
