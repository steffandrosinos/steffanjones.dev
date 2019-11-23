var scrolling = false;
$.fn.scrollView = function () {
  return this.each(function () {
    scrolling = true;
    $('html, body').animate({
      scrollTop: (($(this).offset()).top)-300
    }, 500, function() {
      scrolling = false;
    });
  });
}

//function to blur elements
function blurSections(section_pointer) {
  for(var i=0; i<sections.length; i++) {
    if(i != section_pointer) {
      $("#" + sections[i]).css("filter", "blur(25px)");
    } else {
      $("#" + sections[i]).css("filter", "blur(0px)");
    }
  }
}

var scroll_val = 0;
var sections = ["about", "projects", "contact"];
var section_pointer = 0;
blurSections(section_pointer);

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll > scroll_val) {
    //Scrolling down
    if(!scrolling) {
      if(section_pointer < (sections.length-1)) {
        section_pointer++;
        var section = "#" + sections[section_pointer];
        $(section).scrollView();
        blurSections(section_pointer);
      }
    }
    scroll_val = scroll;
  } else {
    //Scrolling up
    if(!scrolling) {
      if(section_pointer > 0) {
        section_pointer--;
        var section = "#" + sections[section_pointer];
        $(section).scrollView();
        blurSections(section_pointer);
      }
    }
    scroll_val = scroll;
  }
});
