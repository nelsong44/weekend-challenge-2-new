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
//       $('#displayValue').append('<p> Value: ' + response.completedCalculation + '</p>');
//     }//end success
//   });//end post
//   //clear inpout fields
//   document.getElementById('input1').value = '';
//   document.getElementById('input2').value = '';
//   callGet();
// }//end sendToServer

// end base mode --------------------------------------------------------->

// hard/pro mode -->

$(document).ready(function() {
  $('.valueButton').on('click', packageCurrentValue);
  $('.operationButton').on('click', packageOp);
  $('#submitButton').on('click', sendToServer);
});//end ready

var currentValStorage = [];
var val1;
//function to join each value (button click) into a single value
function packageCurrentValue() {
  var info = $(this).data('id');
  currentValStorage.push(info);
  val1 = currentValStorage.join('');
  $('#display').val(val1);
  console.log(val1);
}//end packageCurrentValue

//function to target operation to be performed based on button click
var operation;
function packageOp() {
  operation = $(this).data('id');
  console.log(operation);
  $(this).css('background-color', 'orange');
  changeCurrentValue();
}//end packageOp

var firstValue = [];
//function to change the current value to the stored value
function changeCurrentValue() {
  document.getElementById('display').value = '';
  firstValue.push(val1);
  console.log(firstValue);
  currentValStorage = [];
}//end changeCurrentValue

//function to package values and operation into obj to send to server
function sendToServer() {
  $.ajax({
    type: 'POST',
    url: '/sendToCalculate',
    data: {
      val1: val1,
      operation: operation
    },
    success: function(response) {
      console.log(response);
    }//end success
  });//end post
}//end sendToServer

//on click of operationButton, push val1 into new array and empty currentValStorage to fill with second value
