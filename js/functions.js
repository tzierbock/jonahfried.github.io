$("#slideshow-content > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow-content > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow-content');
},  3000);