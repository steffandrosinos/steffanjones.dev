$("#terminal_input").focus(); //Focus terminal input
$("#terminal_input").val("");

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

/*---------------------------------------------------------------*/
//Commands
function cmd_about() {
  
  addDots();
  
  var line1 = "My name is Steffan Drosinos Jones and I spend most of my free time on a computer."
  var line2 = "I love to create random websites, random software, play video games"
  
  var html1 = "<num>"+ current_number + "</num><dots>····</dots>" + line1 + "<br>"; current_number++;
  var html2 = "<num>"+ current_number + "</num><dots>····</dots>" + line2 + "<br>"; current_number++;
  
  $("#terminal").append(html1);
  $("#terminal").append(html2);
  addDots();
  
  past_commands.push("about"); //add command to past commands
}

function cmd_projects() {

  past_commands.push("projects"); //add command to past commands
}

function cmd_socials() {
  console.log("test");
  
  addDots();
  
  
  var html_linkedin = "<a href='https://www.linkedin.com/in/steffandrosinos/' target='_blank'><img id='social' src='https://steffanjones.dev/static/social/linkedin.png'><social_dot>·</social_dot>LinkedIn</a>";
  var html_github = "<a href='https://github.com/steffandrosinos' target='_blank'><img id='social' src='https://steffanjones.dev/static/social/github.png'><social_dot>·</social_dot>GitHub</a>";
  var html_twitter = "<a href='https://twitter.com/steffandrosinos' target='_blank'><img id='social' src='https://steffanjones.dev/static/social/twitter.png'><social_dot>·</social_dot>@SteffanDrosinos</a>";
  var html_email1 = "<img id='social' src='https://steffanjones.dev/static/social/email.png'><social_dot>·</social_dot>Main: steffan@SteffanJones.dev";
  var html_email2 = "<img id='social' src='https://steffanjones.dev/static/social/email.png'><social_dot>·</social_dot>Secondary: SteffanDrosinos@outlook.com";
  var html1 = "<num>"+ current_number + "</num><dots>····</dots>" + html_linkedin + "<br>"; current_number++;
  var html2 = "<num>"+ current_number + "</num><dots>····</dots>" + html_github + "<br>"; current_number++;
  var html3 = "<num>"+ current_number + "</num><dots>····</dots>" + html_twitter + "<br>"; current_number++;
  var html4 = "<num>"+ current_number + "</num><dots>····</dots>" + html_email1 + "<br>"; current_number++;
  var html5 = "<num>"+ current_number + "</num><dots>····</dots>" + html_email2 + "<br>"; current_number++;
  $("#terminal").append(html1);
  $("#terminal").append(html2);
  $("#terminal").append(html3);
  $("#terminal").append(html4);
  $("#terminal").append(html5);
  
  addDots();
  past_commands.push("socials"); //add command to past commands
}

function cmd_commands() {
  addDots();
  $("#terminal").append("<num>"+ current_number + "</num><dots>····</dots>List of commands:<br>"); current_number++;
  var commands = getCommands();
  for(var i=0; i<commands.length; i++) {
    $("#terminal").append("<num>"+ current_number + "</num><dots>······</dots><b>" + commands[i] + "</b><br>"); current_number++;
  }
  addDots();
  
  past_commands.push("commands"); //add command to past commands
}

function cmd_help() {
  
  addDots();
  var line1 = "This is a command line interface made in basic JS and jQuery in order to display information about me.";
  var line2 = "You can type commands into the terminal. Type &quot;commands&quot; so you can see all available commands.";
  
  var html1 = "<num>"+ current_number + "</num><dots>····</dots>" + line1 + "<br>"; current_number++;
  var html2 = "<num>"+ current_number + "</num><dots>····</dots>" + line2 + "<br>"; current_number++;
  
  $("#terminal").append(html1);
  $("#terminal").append(html2);
  addDots();
  
  past_commands.push("help"); //add command to past commands
}

function cmd_clear() {
  $("#terminal").html(""); //Empty inner html
  current_number = 11;     //Reset column number to 11
  
  past_commands.push("clear"); //add command to past commands
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
        
        past_commands.push(input); //add command to past commands
      }
      
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