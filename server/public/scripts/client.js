$(document).ready(function() {
  console.log('JQsourced');
  //call performCalculation on page load
  $('.calculation').on('click', sendToServer);

});//end onReady

// var firstNumber = $('#input1').val();
// var secondNumber = $('#input2').val();

//function to send input and type of calculation to perform to the server
function sendToServer() {
  var operation = $(this).data('operation');
  var firstNumber = $('#input1').val();
  var secondNumber = $('#input2').val();

  console.log(operation);
  console.log(firstNumber);
  console.log(secondNumber);
  $.ajax({
    type: 'POST',
    url: '/sendToCalculate',
    data: {
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      operation: operation
    },//end data
    success: function(response) {
      console.log(response);
    }//end success
  });//end post

}//end sendToServer
