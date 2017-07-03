var express = require('express'); //require the node express module
// var operation = require('./routes/operation.js');
var app = express(); //call express function to create an instance of the obj
var port = 5000; //establish a port
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
// app.use('/operaton', operation);

app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html'; //will load html file if no other file is specified
  res.sendFile(path.join(__dirname, 'public', file));
}); //end get

app.listen(port, function() {
  console.log('server running on port: ', port);
}); //end listen
