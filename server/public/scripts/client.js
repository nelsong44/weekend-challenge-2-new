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
  $('.valueButton').on('click', packageFirstValue);
  $('#submitButton').on('click', sendToServer);
  $('.operationButton').on('click', packageOp);
});//end ready

var valueStorage = [];
var val1;
//function to push each value chosen by user (based on buttons clicked)
//into an array to join into a single integer and package into an object 
function packageFirstValue() {
  var info = $(this).data('id');
  valueStorage.push(info);
  // for (var i = 0; i < valueStorage.length; i++) {
  //   $('#display').val(valueStorage[i]);
  // }
  val1 = valueStorage.join('');
  $('#display').val(val1);
  console.log(val1);
}//end packageValues

var operation;
function packageOp() {
  operation = $(this).data('id');
  console.log(operation);
}

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
