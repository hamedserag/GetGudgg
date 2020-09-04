//else is the original position
//if is the position after transition
//left animations
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".pc").css({
        "opacity": "1",
        "left": "0",
        "border-radius": "0% 4% 74% 0% / 0% 94% 90% 0%  "
      })
    } else {
      $(".pc").css({
        "opacity": "0",
        "left": "-40%",
        "border-radius": "0% 68% 74% 0% / 0% 94% 11% 0% "
      })
    }
  })
})
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1700) {
      $(".xbox").css({
        "opacity": "1",
        "left": "0",
        "border-radius": "0% 4% 74% 0% / 0% 94% 90% 0%  "
      })
    } else {
      $(".xbox").css({
        "opacity": "0",
        "left": "-40%",
        "border-radius": "0% 68% 74% 0% / 0% 94% 11% 0% "
      })
    }
  })
})
//right animations
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $(".ps").css({
        "opacity": "1",
        "left": "10%",
        "border-radius": "4% 0% 0% 74% / 94% 0% 0% 90%"
      })
    } else {
      $(".ps").css({
        "opacity": "0",
        "left": "50%",
        "border-radius": "68% 0% 0% 74% / 94% 0% 0% 11%"
      })
    }
  })
})
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 2650) {
      $(".switch").css({
        "opacity": "1",
        "left": "10%",
        "border-radius": "4% 0% 0% 74% / 94% 0% 0% 90%"
      })
    } else {
      $(".switch").css({
        "opacity": "0",
        "left": "50%",
        "border-radius": "68% 0% 0% 74% / 94% 0% 0% 11%"
      })
    }
  })
})
