var footer = document.createElement('footer');
footer.setAttribute('style', 'background-color:black;color:white;margin-bottom:2px;');
footer.setAttribute('id', 'container');

var pTime = document.createElement('p');
pTime.setAttribute('id', 'time');
pTime.setAttribute('style', 'margin:1px;');
footer.appendChild(pTime);

var rrTime = document.createElement('p');
rrTime.setAttribute('id', 'rTime');
rrTime.setAttribute('style', 'margin:1px;');
footer.appendChild(rrTime);

var uTime = document.createElement('p');
uTime.setAttribute('id', 'uTime');
uTime.setAttribute('style', 'margin:1px;');
footer.appendChild(uTime);

var copy = document.createElement('p');
copy.setAttribute('id', 'copy');
copy.setAttribute('style', 'margin:1px;');
footer.appendChild(copy);

let p=document.createElement('p');
p.innerHTML="Réalisé par Marc Cormier";
footer.appendChild(p);

document.body.appendChild(footer);
//
setInterval(clock, 1);
function clock() {
const d = new Date();
let time = d.getTime();
let sec = d.getSeconds();
let min = d.getMinutes();
let millisec = d.getMilliseconds();
let hour = d.getHours();
let utc = d.toUTCString();
let fYear = d.getFullYear();
let date = d.getDate();
let day;

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
let rDate=day+", "+date+"&nbsp"+month+"&nbsp"+fYear;
let rTime=hour+":"+min+":"+sec+"."+millisec;
let utcTime=utc;
document.getElementById("time").innerHTML=rDate;
document.getElementById("rTime").innerHTML=rTime;
document.getElementById("uTime").innerHTML=utcTime;
}
var year = new Date().getFullYear();
document.getElementById('copy').innerHTML = "&#169 "+year+" <a href='https://marccormier.github.io' style='color:white;text-decoration:none;'>marccormier.github.io</a>";