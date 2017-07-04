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
var val1 = '';
var val2;
var operation;

//on page load
$(document).ready(function() {
  $('.valueButton').on('click', packageCurrentValue);
  $('.operationButton').on('click', packageOp);
  $('#submitButton').on('click', sendToServer);
});//end ready

//concatenate each integer (button click) into a single, larger integer
function packageCurrentValue() {
  val1 += $(this).data('id');
  $('#display').val(val1);
  console.log(val1);
}//end packageCurrentValue

//target operation to be performed based on button click
function packageOp() {
  operation = $(this).data('id');
  console.log(operation);
  $(this).css('background-color', 'orange');
  swapCurrentValue();
}//end packageOp

//reassign the firs value to the second value, curretn value becomes first value
function swapCurrentValue() {
  document.getElementById('display').value = '';
  val2 = val1;
  val1 = '';
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
      document.getElementById('display').value = '';
      $('#display').val(response.completedCalculation);
    }//end success
  });//end post
}//end sendToServer
