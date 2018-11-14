var date = new Date();
//var n = date.toDateString();
var start = date.getTime();
var duration = 10800000; // 3 hours in ms
var end = start + duration;



var line1string = "line1";
var line2string = "line2";

var elem = document.documentElement;

  

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function displayTime(){
  var currentTime = new Date();
  var hh = currentTime.getHours();
  var mm = currentTime.getMinutes();
  var ss = currentTime.getSeconds();
  var ampm = "AM";

  if (hh > 12){
    hh -= 12;
    ampm = "PM";
  }

  if (hh < 10){
    hh = "0" + hh;
  }

  if (mm < 10){
    mm = "0" + mm;
  }

  if (ss < 10){
    ss = "0" + ss;
  }

  var output = hh + ":" + mm + ":" + ss + " " + ampm;
  var timeLeft = msToTime(end - currentTime);
  line3string = "Expires in " + msToTime(end - new Date());
  return output;
}


var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}

var month;
switch(date.getMonth()) {
		case 0:
    	month = "Jan";
      break;
   	case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
   	case 4:
    	month = "May";
      break;
   	case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
    	month = "Sep";
      break;
   	case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;	
}

function msToTime(s) {
  var days = "00";

  var ms = s % 1000;
  s = (s - ms) / 1000;
  
  var secs = s % 60;
  s = (s - secs) / 60;
  
  var mins = s % 60;
  
  var hrs = (s - mins) / 60;
 
	if (hrs < 10) {
		hrs = "0" + hrs;
	}

	if (mins < 10) {
		mins = "0" + mins;
	}
	if (secs < 10) {
		secs = "0" + secs;
	}

  return days + ':' + hrs + ':' + mins + ':' + secs 

  // return days + ':' + hrs + ':' + mins + ':' + secs < 10 ? "0" + secs : secs;
}

function startIt() {
    setInterval(myFunction, 1000);
}

function myFunction(){
	  line1string =  displayTime(); 
    line2string = day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
	  //line3string = "Expires in " + timeLeft;
   
	document.getElementById("line3").innerHTML = line3string;
	document.getElementById("line1").innerHTML = line1string;
	document.getElementById("line2").innerHTML = line2string;
}




