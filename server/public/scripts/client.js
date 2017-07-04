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
  $('.valueButton').on('click', packageValues);
  $('#submitButton').on('click', sendToServer);
});//end ready

var valueStorage = [];
function packageValues() {
  console.log($(this));
  valueStorage.push($(this).data('id'));
  for (var i = 0; i < valueStorage.length; i++) {
    $('#display').val(valueStorage[i]);
  }
  console.log(valueStorage);
  return valueStorage;
}//end packageValues
console.log(valueStorage);

function sendToServer() {
  $.ajax({
    type: 'POST',
    url: '/sendToCalculate',
    data: {
      calcInfo: valueStorage
    },
    success: function(response) {
      console.log(response);
    }//end success
  });//end post
}//end sendToServer
