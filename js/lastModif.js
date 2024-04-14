setInterval(clock, 1);
function clock() {
const d = new Date();
let time = d.getTime();
let sec = d.getSeconds();
let min = d.getMinutes();
let millisec = d.getMilliseconds();
let hour = d.getHours();
let fYear = d.getFullYear();
let date = d.getDate();
let day;

/*
const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const d = new Date();
let day = weekday[d.getDay()];
*/

switch (d.getDay()) {
  case 0:
  day = "Dimanche";
  break;
  case 1:
  day = "Lundi";
  break;
  case 2:
  day = "Mardi";
  break;
  case 3:
  day = "Mercredi";
  break;
  case 4:
  day = "Jeudi";
  break;
  case 5:
  day = "Vendredi";
  break;
  case  6:
  day = "Samedi";
}

let month;
switch (d.getMonth()) {
  case 0:
  month = "Janvier";
  break;
  case 1:
  month = "Février";
  break;
  case 2:
  month = "Mars";
  break;
  case 3:
  month = "Avril";
  break;
  case 4:
  month = "Mai";
  break;
  case 5:
  month = "Juin";
  break;
  case  6:
  month = "Juillet";
  break;
  case 7:
  month = "Août";
  break;
  case  8:
  month = "Septembre";
  break;
  case  9:
  month = "Octobre";
  break;
  case  10:
  month = "Novembre";
  break;
  case  11:
  month = "Décembre";
}
hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;
month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;
let res=day+", "+date+"&nbsp"+month+"&nbsp"+fYear+"<br/>"+hour+":"+min+":"+sec+"."+millisec;
document.getElementById("time").innerHTML=res;
}
