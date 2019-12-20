
function setLangVis(bool) {
  if($(window).width() < 1000) {
    if(bool) {
      $("#lang_java").css("visibility", "visible");
      $("#lang_python").css("visibility", "visible");
      $("#lang_js").css("visibility", "visible");
      $("#lang_html").css("visibility", "visible");
      $("#lang_css").css("visibility", "visible");
      $("#lang_c").css("visibility", "visible");
      $("#lang_cpp").css("visibility", "visible");
      $("#lang_haskell").css("visibility", "visible");
    } else {
      $("#lang_java").css("visibility", "hidden");
      $("#lang_python").css("visibility", "hidden");
      $("#lang_js").css("visibility", "hidden");
      $("#lang_html").css("visibility", "hidden");
      $("#lang_css").css("visibility", "hidden");
      $("#lang_c").css("visibility", "hidden");
      $("#lang_cpp").css("visibility", "hidden");
      $("#lang_haskell").css("visibility", "hidden");
    }
  }
}

function setVisible(bool_lang, bool_about) {

  var width = $(window).width();

  if(bool_lang) {
    $("#languages_content").css("filter", "blur(0px)");
    $("#languages_content").removeClass("hidden");
    $("#languages_content").addClass("visible");
  } else {
    if(width > 1000) {
      $("#languages_content").css("filter", "blur(25px)");
    }
    $("#languages_content").removeClass("visible");
    $("#languages_content").addClass("hidden");
  }

  if(bool_about) {
    $("#about_content").css("filter", "blur(0px)");
    $("#about_content").removeClass("hidden");
    $("#about_content").addClass("visible");
  } else {
    if(width > 1000) {
      $("#about_content").css("filter", "blur(25px)");
    }
    $("#about_content").removeClass("visible");
    $("#about_content").addClass("hidden");
  }

}

$(function() {

  $("#main").addClass("position");
  setLangVis(false);

  var position = false;
  var about_pressed = false;
  var languages_pressed = false;

  $("#about").click(function() {

    if(position) {
      if(about_pressed) {
        $(".position").css("top", "50%");
        setVisible(false, false);
        setLangVis(false);
        languages_pressed = false;
        about_pressed = false;
        position = false;
      } else {
        //HTML stuff
        setVisible(false, true);
        setLangVis(false);
        about_pressed = true;
        languages_pressed = false;
      }
    } else {
      var width = $(window).width();
      if(width < 1000) {
        $(".position").css("top", (($(window).height())/25) + 200);
      } else {
        $(".position").css("top", (($(window).height())/10) + 200);
      }
      setVisible(false, true);
      about_pressed = true;
      position = true;
    }

  });

  $("#feat_lang").click(function() {

    if(position) {
      if(languages_pressed) {
        $(".position").css("top", "50%");
        setVisible(false, false);
        setLangVis(false);
        languages_pressed = false;
        about_pressed = false;
        position = false;
      } else {
        //HTML stuff
        setVisible(true, false);
        setLangVis(true);
        languages_pressed = true;
        about_pressed = false;
      }
    } else {
      var width = $(window).width();
      if(width < 1000) {
        $(".position").css("top", (($(window).height())/25) + 200);
      } else {
        $(".position").css("top", (($(window).height())/10) + 200);
      }
      setVisible(true, false);
      setLangVis(true);
      languages_pressed = true;
      position = true;
    }

  });

});
