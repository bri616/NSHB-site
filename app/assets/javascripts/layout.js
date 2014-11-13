
$(function() {
  $("#logIn").click(logInClickHandler);
});

function logInClickHandler() {
    $("#login-box").animate({opacity:($("#login-box").css('opacity')==1)?0:1});
}
