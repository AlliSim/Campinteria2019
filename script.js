var strikes = 0;
var count = 0;

$("#sorryBud").click( function(){
  $(this).css("opacity", "1");
} );
$("#sorryBud").mouseout( function(){
  $(this).css("opacity", "0");
} );

$("#button").click(function(){
  count = 0;
  strikes = 0;
  $("#endScreen").css("height", "0px");
  $(this).css("display", "none");
  $(".meh").css("border", "2px solid transparent");
  $(".strike").css("color", "transparent");
  $("#text").text("Found: 0");
})

//allow rectangle to appear around the different items
$("div.meh").click(function() {
  $(this).css("display", "inline");
  $(this).css("border", "2px solid red");
  count++;
  $("#text").text("Found: " + count);
  if (count == 10) {
    $("#endScreen").css(
        "background-image", "url('https://previews.123rf.com/images/lkeskinen/lkeskinen1705/lkeskinen170503635/77661040-stage-clear-rubber-stamp.jpg')" );
    $("#endScreen").css(
      "height",
      "680px" );
    $("#endScreen").css(
      "background-size",
      "890px 680px" );
  }
});

$("#blind").click(function() {
  $(this).css("background", "transparent");
  $(this).css("border", "0px solid transparent");
  $(this).css("color", "transparent");
});

//shows the answer after you have three strikes
$("img").click(function() {
  console.log(strikes);

  strikes++;

  console.log(strikes);

  if (strikes <= 3) {
    $("#wrong" + strikes).css("color", "red");
    if (strikes == 3) {
      $("#blind").css("background", "transparent");
      $("#blind").css("color", "transparent");
//       Gameover BG
      $("#endScreen").css(
        "background-image", "url('https://image.shutterstock.com/image-vector/white-game-over-logo-pixel-600w-789597106.jpg')" );
      $("#endScreen").css(
      "background-repeat",
      "no-repeat" );
      $("#endScreen").css(
      "height",
      "680px" );
      $("#endScreen").css(
      "background-size",
      "890px 680px" );
//       Try again button
      $("#button").fadeIn();
    }
  }
});