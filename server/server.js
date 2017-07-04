var express = require('express'); //require the node express module
var app = express(); //call express function to create an instance of the obj
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000; //establish a port

app.use(bodyParser.urlencoded({extended:true}));

app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, 'public', file));
}); //end get

app.listen(port, function() {
  console.log('server running on port: ', port);
}); //end listen

// base mode ------------------------------------------------->

// app.post('/sendToCalculate', function(req, res) {
//   //verify object sent from client
//   console.log(req.body);
//   var firstNumber = parseInt(req.body.firstNumber);
//   var secondNumber = parseInt(req.body.secondNumber);
//   var operation = req.body.operation;
//   var completedCalculation;
//   calc();
//   //perform specified calculation
//   function calc() {
//     if(operation == 'add') {
//       completedCalculation = firstNumber + secondNumber;
//     }
//     else if(operation == 'subtract') {
//       completedCalculation = firstNumber - secondNumber;
//     }
//     else if (operation == 'multiply') {
//       completedCalculation = firstNumber * secondNumber;
//     }
//     else {
//       completedCalculation = firstNumber / secondNumber;
//     }
//     console.log(completedCalculation);
//     return completedCalculation;
//   }
//   //send value from the completed calculation back to client
//   res.send({completedCalculation: completedCalculation});

// end base mode ---------------------------------------------->

// hard/pro mode -->


// });//end post

app.post('/sendToCalculate', function(req, res) {
  var val1 = req.body.val1;
  var val2 = req.body.val2;
  var operation = req.body.operation;
  res.send({message: 'performing calculation...'});
  console.log(val1);
  console.log(val2);
  console.log(operation);

});//end post
