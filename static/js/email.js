
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
}

var hoverBool = false;

$( document ).ready(function() {
  $('#email').hover(function() {
    $('#emailTip').html("steffan@steffanjones.dev<br><cp>(click to copy)</cp>");
  });

  $('#email').mouseout(function() {
    //hoverBool = false;
  });

  $('#email').click( //Click function
    function() {
      copyToClipboard('#email_val');
      $('#emailTip').html("Copied!");
    }
  );
});
