if (localStorage.visitors) {localStorage.visitors=Number(localStorage.visitors)+1;}
else {localStorage.visitors=1;}
visitors=localStorage.visitors;
const date = (date = new Date()) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  now = day+"/"+month+"/"+year;
}
date();
let dateTime = new Date();
let time = ((dateTime.getHours().toString()).length>1? dateTime.getHours() : "0"+dateTime.getHours()) +":"+ ((dateTime.getMinutes().toString()).length>1? dateTime.getMinutes() : "0"+dateTime.getMinutes());
let storedText;
fetch('https://ipinfo.io/json?callback') .then(function(response) {
  response.text().then(function(text) {
    let storedText = text;
    //JSON obj get from response.text()
    let str=storedText.toString();
    let dt=str.slice(1, -48);
    localStorage.setItem('visitor'+visitors, time+" "+now+" "+dt);
    let clientInfo=localStorage.getItem('visitor'+visitors);
    console.info(clientInfo);
  });
});