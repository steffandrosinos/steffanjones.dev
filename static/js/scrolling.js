//start
var scroll_val = 0;
var sections = ["about", "projects", "contact"];
var section_pointer = 0;
var scrolling = false;
blurSections(section_pointer);

function scrollToDiv(div) {
  scrolling = true;
  $('html, body').animate({
    scrollTop: (($(div).offset()).top)-360
  }, 500, function() {
    scrolling = false;
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

function scrollOnce(dir) {
  if(dir == "up") {
    section_pointer--;
  } else if(dir == "down") {
    section_pointer++;
  }
  var section = "#" + sections[section_pointer];
  scrollToDiv(section);
  blurSections(section_pointer);
}

$(document).ready(function() {

  scrollToDiv("#about");

  $("#up_arrow").click(function() {
    if(!scrolling) {
      if(section_pointer > 0) {
        scrollOnce("up");
      }
    }
  });
  $("#down_arrow").click(function() {
    if(!scrolling) {
      if(section_pointer < sections.length-1) {
        scrollOnce("down");
      }
    }
  });
});

$(document).keydown(function (e) {
  switch (e.keyCode) {
    //Past commands
    case 38: //up arrow
      if(!scrolling) {
        if(section_pointer > 0) {
          scrollOnce("up");
        }
      }
      break;

    case 40: //down arrow
      if(!scrolling) {
        if(section_pointer < sections.length-1) {
          scrollOnce("down");
        }
      }
      break;

    default:
      //do nothing
      break;
  }

})
