// var express = require('express');
// var router = express.Router();
//
// router.post('/', function(req, res) {
//     //verify object sent from client
//     console.log(req.body);
//     var firstNumber = parseInt(req.body.firstNumber);
//     var secondNumber = parseInt(req.body.secondNumber);
//     var operation = req.body.operation;
//     var completedCalculation;
//     calc();
//     //perform specified calculation
//     function calc() {
//       if(operation == 'add') {
//         completedCalculation = firstNumber + secondNumber;
//       }
//       else if(operation == 'subtract') {
//         completedCalculation = firstNumber - secondNumber;
//       }
//       else if (operation == 'multiply') {
//         completedCalculation = firstNumber * secondNumber;
//       }
//       else {
//         completedCalculation = firstNumber / secondNumber;
//       }
//       console.log(completedCalculation);
//       return completedCalculation;
//     }//end calc
//     //send value from the completed calculation back to client
//     res.send({completedCalculation: completedCalculation});
//   });//end post
//
// module.exports = router;
