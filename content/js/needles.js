/*
rNode = function() {
  document.body.innerHTML += this;
}
//The window object calls the function:
window.addEventListener("load", rNode);
//
deuxieme = val => "Deuxieme " + val;
document.body.innerHTML += deuxieme("Univers !");
//
troisieme = () => {return "troisieme World!"; }
document.body.innerHTML += troisieme();
//
*/
doc=document;
function $(id) {return doc.getElementById(id) }
//html
//body
//main
obj=[];
arr={};
//
let produits=(a, b) => a+b;
let soustraction=(a, b) => a-b;
let multiplication=(a, b) => a*b;
let division=(a, b) => a/b;
/*
let rayon=;
let perimetre=;
let sin=;
let con=;
*/
//
/* doc Frag exemple */
const fruits = ["Banane", "Orange", "Mangue", "Pomme", "Poire", "Cerise", "Pêche", "Raisin", "Tomate"];
function dFrag() {
t=document.createElement("table");
const dFrag = document.createDocumentFragment();
for (let x in fruits) {
  const th = document.createElement('th');
  th.textContent = fruits[x];
  dFrag.appendChild(th);
  t.appendChild(dFrag);
}
document.body.appendChild(t);
}
/**/
function historyBack() {window.history.back();}
/* Time */
function time() {
const time = new Date();
var month=time.getMonth()+1;
var day=time.getDate();
var year=time.getFullYear();
if (month <10 ){month='0' + month;}
if (day <10 ){day='0' + day;}
var x3= month+'-'+day+'-'+year;
var hour=time.getHours();
var minute=time.getMinutes();
var second=time.getSeconds();
if(hour <10 ){hour='0'+hour;}
if(minute <10 ) {minute='0' + minute; }
var x3 = x3 + ' ' +  hour+':'+minute+':'+second
time.getDate(); // returns value 1-31 for day of the month
time.getDay(); //returns value 0-6 for day of the week
time.getFullYear(); //returns a 4 digit value for the current year
time.getHours(); //returns value 0-23 for the current hour
time.getMinutes(); //returns value 0-59 for the current minute of the hour
time.getSeconds(); //returns value 0-59 for current second of the minute
time.getMilliseconds(); //returns value 0-999 for current ms of the second
time.getTime(); //returns date as ms since Jan 1, 1970
time.toDateString(); //returns a string (e.g. "Fri May 9 2020")
time.toLocaleString(); //returns date and time (e.g. "9/12/2015, 6:08:25 PM")
time.toLocaleTimeString(); //returns time (e.g. "6:08:25 PM")
time.toLocaleDateString(); //returns date (e.g. "9/12/2015")
let now = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
window.document.write(now);
}
//setInterval(time,1000);
//function showTime() {setInterval(time,1000);}