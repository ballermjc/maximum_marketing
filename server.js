var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000);
console.log('Server is listening on port 3000...');
