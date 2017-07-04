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
//   callGet();
// }//end sendToServer

// end base mode --------------------------------------------------------->

// hard/pro mode -->

//globals
var firstVal = [];
var currentVal = [];
var val1;
var val2;
var operation;

$(document).ready(function() {
  $('.valueButton').on('click', packageCurrentValue);
  $('.operationButton').on('click', packageOp);
  $('#submitButton').on('click', sendToServer);
});//end ready

//function to join each value (button click) into a single value
function packageCurrentValue() {
  var info = $(this).data('id');
  currentVal.push(info);
  val1 = currentVal.join('');
  $('#display').val(val1);
  console.log(val1);
}//end packageCurrentValue

//function to target operation to be performed based on button click
function packageOp() {
  operation = $(this).data('id');
  console.log(operation);
  $(this).css('background-color', 'orange');
  swapCurrentValue();
}//end packageOp

//function to change the current value to the first value
function swapCurrentValue() {
  document.getElementById('display').value = '';
  // firstVal.push(val1);
  // console.log(firstVal);
  val2 = val1;
  currentVal = [];
}//end swapCurrentValue

//function to package values and operation into obj to send to server
function sendToServer() {
  $.ajax({
    type: 'POST',
    url: '/sendToCalculate',
    data: {
      val1: val1,
      val2: val2,
      operation: operation
    },
    success: function(response) {
      console.log(response);
    }//end success
  });//end post
}//end sendToServer

//on click of operationButton, push val1 into new array and empty currentVal to fill with second value
