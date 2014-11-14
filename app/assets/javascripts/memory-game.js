$(function() {
  $(".card").click(stoutClickHandler);
});

function stoutClickHandler() {
  var theBeer = this.classList[1];
  $(this).attr("src","assets/memory-game/"+ theBeer + ".jpg");
}
