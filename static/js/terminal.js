$("#terminal_input").focus(); //Focus terminal input
$("#terminal_input").val(""); //set its valuie to empty

//Variables
var current_number = 30;      //Column numbers, starts at 30, resets to 11
var past_commands_index = 0;  //Past commands index
var past_commands = [];       //Past commands array

//Function to get commands
function getCommands() {
  var commands = [
    "about",
    "projects",
    "socials",
    "commands",
    "help",
    "clear"
  ];
  return commands;
}

//Function to add input line back
function addInputLine() {
  var html = "<num>"+ current_number + "</num><cl>root</cl>@steffanjones.dev <gr>/var/www/steffanjones.dev </gr><cl>~$ </cl><input type='text' placeholder='' id='terminal_input' value=''>"; current_number++;
  $("#terminal").append(html);                //Add html to terminal
  $("#terminal_input").focus();               //Focus input
  past_commands_index = past_commands.length; //Reset commands index
}

//adding dots instead of calling this line multiple times I call this function
function addDots() {
  $("#terminal").append("<num>"+ current_number + "</num><dots>····</dots><br>");current_number++;
}

//Function that adds command response
function addHtml(intputHtml) {
  var html = "<num>"+ current_number + "</num><dots>····</dots>" + intputHtml + "<br>"; current_number++;
  $("#terminal").append(html);
}

//Function that takes div as input and copies to clipboard whatever text is in that div
function copyToClipboard(element) {
 var $temp = $("<input>");
 $("body").append($temp);
 $temp.val($(element).html()).select();
 document.execCommand("copy");
 $temp.remove();
}

/*---------------------------------------------------------------*/
//Commands
function cmd_about() {
  
  var line1 = "My name is <cy>Steffan Drosinos Jones</cy> and I spend most of my free time on a computer."
  var line2 = "I'm currently studying Computer Science at the <cy><a href='https://www.liverpool.ac.uk/study/undergraduate/courses/computer-science-bsc-hons/overview/' target='_blank'>University of Liverpool.</a></cy>";
  var line3 = "I'll be looking for a job after I graduate in 2020. I'm looking for Computer Networking, programming or Cloud Engineering work.";
  var line4 = "I love to create random websites, random software and play video games."
  var line5 = "I've wanted to display my web development abilities for a while but never thought to create something like this."
  var line6 = "From what I've seen from other portfolios, I think this cli is a creative way of expressing myself."
  var line7 = "The idea behind this page is to showcase some information about me and showcase some of my projects."
  var line8 = "I also have a non-cli version at <cy><a href='https://www.steffanjones.dev'/' target='_blank'>www.steffanjones.dev</a></cy> (not live yet!)."
  
  addDots();
  addHtml(line1);
  addHtml(line2);
  addHtml(line3);
  addHtml(line4);
  addHtml(line5);
  addHtml(line6);
  addHtml(line7);
  addHtml(line8);
  addDots();
  
}

function cmd_projects() {

}

function cmd_socials() {
  var html_linkedin = "<a href='https://www.linkedin.com/in/steffandrosinos/' target='_blank'><img id='social' src='https://steffanjones.dev/static/social/linkedin.png'><social_dot>·</social_dot>LinkedIn</a>";
  var html_github = "<a href='https://github.com/steffandrosinos' target='_blank'><img id='social' src='https://steffanjones.dev/static/social/github.png'><social_dot>·</social_dot>GitHub</a>";
  var html_twitter = "<a href='https://twitter.com/steffandrosinos' target='_blank'><img id='social' src='https://steffanjones.dev/static/social/twitter.png'><social_dot>·</social_dot>@SteffanDrosinos</a>";
  var html_email1 = "<img id='social' src='https://steffanjones.dev/static/social/email.png'><social_dot>·</social_dot>Main: <div id='email1'><div id='email1_val'>steffan@steffanjones.dev</div><span id='emailTip1'></span></div>";
  var html_email2 = "<img id='social' src='https://steffanjones.dev/static/social/email.png'><social_dot>·</social_dot>Secondary: <div id='email2'><div id='email2_val'>SteffanDrosinos@outlook.com</div><span id='emailTip2'></span></div>";
  
  addDots();
  addHtml(html_linkedin);
  addHtml(html_github);
  addHtml(html_twitter);
  addHtml(html_email1);
  addHtml(html_email2);
  addDots();
  
  //Email copying handling
  //Email1
  $('#email1').hover( //On hover function
    function() {
      $('#emailTip1').html("Copy to clipboard");
    }
  );
  $('#email1').click( //Click function
    function() {
      copyToClipboard('#email1_val');
      $('#emailTip1').html("Copied!");
    }
  );
  
  //Email2
  $('#email2').hover( //On hover function
    function() {
      $('#emailTip2').html("Copy to clipboard");
    }
  );
  $('#email2').click( //Click function
    function() {
      copyToClipboard('#email2_val');
      $('#emailTip2').html("Copied!");
    }
  );
  
}

function cmd_commands() {
  var line_list = "<cy>List of commands:</cy>"
  
  addDots();
  addHtml(line_list);
  var commands = getCommands();
  for(var i=0; i<commands.length; i++) {
    var line = "<dots>··</dots><b>" + commands[i] + "</b>";
    addHtml(line);
  }
  addDots();
}

function cmd_help() {
  var line1 = "This is a command line interface made in basic JS and jQuery in order to display information about me.";
  var line2 = "You can type commands into the terminal. Type &quot;commands&quot; so you can see all available commands.";
  var line3 = "You can view past commands by using the up arrow and down arrow keys."
  
  addDots();
  addHtml(line1);
  addHtml(line2);
  addHtml(line3);
  addDots();
}

function cmd_clear() {
  $("#terminal").html(""); //Empty inner html
  current_number = 11;     //Reset column number to 11
}
/*---------------------------------------------------------------*/

//Dealing with Enter key, uparrow and downarrow
$(document).keydown(function (e) {
  switch (e.keyCode) {
    //Enter key
    case 13:
      var input = $('#terminal_input').val();
      $('#terminal_input').remove();
      $("#terminal").append(input + "<br>");
    
      //Parsing input
      if(input == "about") {
        cmd_about();
      } else if(input == "projects") {
        cmd_projects();
      } else if(input == "socials") {
        cmd_socials();
      } else if(input == "commands") {
        cmd_commands();
      } else if(input == "clear") {
        cmd_clear();
      } else if(input == "help") {
        cmd_help();
      } else {
        //Not a valid command
        var line = "<red>" + input + "</red>: command not found";
        
        addDots();
        addHtml(line);
        addDots();
        
      }
      
      past_commands.push(input);
      addInputLine();
      
      break;
      
    //Past commands
    case 38: //up arrow
      if(past_commands_index != 0) {
        past_commands_index--;
        $('#terminal_input').val(past_commands[past_commands_index]);
      }
      break;

    case 40: //down arrow
      if(past_commands_index != past_commands.length) {
        past_commands_index++;
        $('#terminal_input').val(past_commands[past_commands_index]);
      }
      break;
    
    default:
      //do nothing
      break;
  }
  
})

//Keep focusing the terminal input
loop=setInterval(function(){
  $("#terminal_input").focus();
},500);