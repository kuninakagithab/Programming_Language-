$(function () {



  $(".nav").on("click", function () {
    $(this).children().siblings("li").slideToggle();
  });


  $("#typing").t({
    speed: 100,
    speed_vary: true,
    delay: 2,
    mistype: 10,
    caret: true,
    blink: true,
    repeat: false,
  });



});