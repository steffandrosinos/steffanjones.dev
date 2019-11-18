function getUptime() {
  var startdate = 1573430400000;           //get time since 11/11/2019 AKA the day I made this server
  var milliseconds = (new Date).getTime(); //get current time
  var uptime = milliseconds - startdate;   //Time since start date
  return uptime;
}

$('#uptime').html("0 Days, 0 Hours, 0 Minutes, 0 Seconds"); //set temp value

window.setInterval( function() {
  var uptime = getUptime();
  //I use MOD in order to get days + hours + minutes + seconds
  //instead of getting seconds since start time etc.
  var seconds = Math.floor((uptime/1000)%60);       //ms/1000 = seconds
  var minutes = Math.floor((uptime/(1000*60))%60);  //ms/1000*60 = minutes
  var hours = Math.floor((uptime/(1000*60*60))%24); //ms/1000*60*60 = hours
  var days = Math.floor((uptime/(1000*60*60))/24);
  var output = days.toString() + " Days, " + hours.toString() + " Hours, " + minutes.toString() + " Minutes, " + seconds.toString() + " Seconds";
  //document.getElementById("uptime").innerHTML = output; //change inner html to output
  $('#uptime').html(output);
}, 1000); //1 sec interval