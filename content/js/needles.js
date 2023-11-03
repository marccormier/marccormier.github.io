 /*
premier = function() {document.body.innerHTML += this; }
//The window object calls the function:
window.addEventListener("load", premier);
//
deuxieme = val => "Deuxieme " + val;
document.body.innerHTML += deuxieme("Univers !");
//
troisieme = () => {return "troisieme World!"; }
document.body.innerHTML += troisieme();
*/
// Numbers:
let number = 38;
// Strings:
let color = "Peridot";
let lastName = "CORMIER";
// Booleans
let i = true;
let j = false;
// Object:
const person = {firstName:"Marc", lastName:"Cormier"};
// Array object:
const numbers=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Date object:
const now=new Date();
const numbersString=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alphaNum={a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:"", j:"", k:"", l:"", m:"", n:"", o:"", p:"", q:"", r:"", s:"", t:"", u:"", v:"", w:"", x:"", y:"", z:"", A:"", B:"", C:"", D:"", E:"", F:"", G:"", H:"", I:"", J:"", K:"", L:"", M:"", N:"", O:"", P:"", Q:"", R:"", S:"", T:"", U:"", V:"", W:"", X:"", Y:"", Z:"", 0:"", 1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""};
const alphaAccentuer={à:"", â:"", è:"", ê:"", é:"", î:"", ô:"", û:""};
// portee des variables
function varScope() {
        a = 123               // Portée globale
    var b = 456               // Portée locale
    if (a == 123) var c = 789 // Portée locale
}
win=window;
doc=document;
function $(id) {return doc.getElementById(id) }
// function $(id){document.getElementById(id) } /* Find an element by element id */
function $(name){document.getElementsByTagName(name) } /* Find elements by tag name */
function $(name){document.getElementsByClassName(name) } /* Find elements by class name */
//html
//body
//main
hr=function hr() {doc.write("<hr>"); }
const space = "&nbsp;";
const comma = ",";
const dapos = '"';
const ddots = ":";
const lcbrk = "{";
const rcbrk = "}";
//
// Arrays use numbers to access arr[0]
const arr = [];
// Objects use names to access obj.firstName
const obj = {};
//
function arrLength() {
let arrLength=arr.length   // Returns the number of elements
let arrSort=arr.sort()   // Sorts the array
// looping arr array elements
let arrLoop="<ul>";
for (let i = 0; i < arrLength; i++) {arrLoop += "<li>" + arr[i] + "</li>"; }
arrLoop+="</ul>";
}
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
/*
// nested DOM Structure Fragment
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement('section'))
  .appendChild(document.createElement('ul'))
  .appendChild(document.createElement('li'));
li.textContent = 'hello world';
document.body.appendChild(fragment);
*/
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