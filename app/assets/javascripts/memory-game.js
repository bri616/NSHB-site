$(function() {
  // if two cards are flipped, check to see if they are the same
  
  $(".card").click(stoutClickHandler);

});

function stoutClickHandler() {
  var theBeer = this.classList[1];
  $(this).attr("src","assets/memory-game/"+ theBeer + ".jpg");
  // add the class of "flipped" to the card
  $(this).addClass("flipped");
}
