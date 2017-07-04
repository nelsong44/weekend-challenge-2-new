// base mode ------------------------------------------------------------->

// $(document).ready(function() {
//   console.log('JQsourced');
//   //call performCalculation on page load
//   $('.calculation').on('click', sendToServer);
//
// });//end onReady
//
// //function to send input and type of calculation to perform to the server
// function sendToServer() {
//   var operation = $(this).data('operation');
//   var firstNumber = $('#input1').val();
//   var secondNumber = $('#input2').val();
//   $.ajax({
//     type: 'POST',
//     url: '/sendToCalculate',
//     data: {
//       firstNumber: firstNumber,
//       secondNumber: secondNumber,
//       operation: operation
//     },//end data
//     success: function(response) {
//       console.log(response);
//       $('#displayValue').empty();
//       $('#displayValue').append('<p> Value: ' +
//        response.completedCalculation + '</p>');
//     }//end success
//   });//end post
//   //clear inpout fields
//   document.getElementById('input1').value = '';
//   document.getElementById('input2').value = '';
// }//end sendToServer

// end base mode --------------------------------------------------------->

// hard/pro mode -->

//globals
var firstNumber = '';
var secondNumber;
var operation;

//on page load
$(document).ready(function() {
  $('.valueButton').on('click', packageCurrentValue);
  $('.operationButton').on('click', packageOperation);
  $('#submitButton').on('click', sendToServer);
  $('#clearButton').on('click', function() {
      document.getElementById('display').value = '';
      firstNumber = '';
      secondNumber = '';
  });//end clear
});//end ready

//concatenate each integer (button click) into a single, larger integer
function packageCurrentValue() {
  document.getElementById('display').value = '';
  firstNumber += $(this).data('id');
  $('#display').val(firstNumber);
  console.log(firstNumber);
}//end packageCurrentValue

//target operation to be performed based on button click
function packageOperation() {
  operation = $(this).data('id');
  console.log(operation);
  $(this).css('background-color', 'orange');
  swapCurrentValue();
}//end packageOp

//reassign the first value to the second value, current value becomes first value
function swapCurrentValue() {
  document.getElementById('display').value = '';
  secondNumber = firstNumber;
  firstNumber = '';
}//end swapCurrentValue

//function to package values and operation into obj to send to server
function sendToServer() {
  $.ajax({
    type: 'POST',
    url: '/sendToCalculate',
    data: {
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      operation: operation
    },
    success: function(response) {
      console.log(response);
      //clear calculator input field
      document.getElementById('display').value = '';
      firstNumber = '';
      //display calculation output in calculator input field
      $('#display').val(response.completedCalculation);
    }//end success
  });//end post
}//end sendToServer
