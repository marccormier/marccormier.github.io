// window.addEventListener("load", dom);
//
/*
const http=require('http');
const fs=require('fs');
const port=3000
const server=http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404)
      res.write('Erreur: fichier introuvable !')
    } else {
      res.write(data)
    }
    res.end()
  })
})
// nested DOM Structure Fragment
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement('section'))
  .appendChild(document.createElement('ul'))
  .appendChild(document.createElement('li'));
li.textContent = 'hello world';
document.body.appendChild(fragment);
// obj elem
var txtObj=document.createElement("OBJECT");
txtObj.setAttribute("data", "ref.htm");
txtObj.setAttribute("width", "400");
txtObj.setAttribute("height", "400");
document.body.appendChild(txtObj);
//
premier = function() {document.body.innerHTML += this; }
//The window object calls the function:
window.addEventListener("load", premier);
//
deuxieme = val => "Deuxieme " + val;
document.body.innerHTML += deuxieme("Univers !");
//
troisieme = () => {return "troisieme World!"; }
document.body.innerHTML += troisieme();
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
*/
win=window;
doc=document;
function $(id) {return doc.getElementById(id) }
// function $(id){document.getElementById(id) } 
// Find an element by element id
function $(name){document.getElementsByTagName(name) } 
// Find elements by tag name 
function $(name){document.getElementsByClassName(name) } 
// Find elements by class name 
//html
//body
//main
hr=function hr() {doc.write("<hr>"); }
/*
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
//
// function Mathematique
var addition = function(x, y) {return x + y; };
var substraction = function(x, y) {return x - y; };
var multiply = function(x, y) {return x * y; };
var division = function(x, y) {return x / y; };
var modulo = function(x, y) {return x % y; };
var exponent = function(x, y) {return x ** y; };
//
let rayon=;
let perimetre=;
let sin=;
let con=;
//
// doc Frag exemple
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
// nested DOM Structure Fragment
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement('section'))
  .appendChild(document.createElement('ul'))
  .appendChild(document.createElement('li'));
li.textContent = 'hello world';
document.body.appendChild(fragment);
//
*/
function historyBack() {window.history.back();}
/*
// Time
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
//
HTML DOM  JS
doctype, xhtml5, meta, title, style, header,
window, document, head, title, body 
are HTML Object Element Tag who does,nt need to be set as var or function
because they already are reconize by the DOM as properties method or even 
an other lang
//
comment=document.createComment()
//
document.createElement(element) Create an HTML element
document.removeChild(element) Remove an HTML element
document.appendChild(element) Add an HTML element
document.replaceChild(new, old) Replace an HTML element
document.write(text)  Write into the HTML output stream
//
function hScript(){
hScript = doc.createElement("script");
hScript.type = "text/javascript";
hScript.src = "http://domain.com/";
hScript.innerHTML='';
$("head").append(hScript);
}
function bScript(){
bScript = doc.createElement("script");
bScript.type = "text/javascript";
bScript.src = "http://domain.com/";
bScript.innerHTML='';
$("body").append(bScript);
}
// doc fragment 
main=document.createElement('main');
var header=document.createElement('header');
var footer=document.createElement('footer');
var section=document.createElement('section');
var aside=document.createElement('aside');
var nav=document.createElement('nav');
var article=document.createElement('article');
var figure=document.createElement('figure');
var para=document.createElement('p');
var div=document.createElement('div');
var img=document.createElement('img');
var input=document.createElement('input');
var hgroup=document.createElement('hgroup');
var mark=document.createElement('mark');
var time=document.createElement('time');
 object=doc.createElement('object');
 section=doc.createElement('section');
 article=doc.createElement('article');
 aside=doc.createElement('aside');
 details=doc.createElement('details');
 summary=doc.createElement('summary');
 address=doc.createElement('address');
 mark=doc.createElement('mark');
 para=doc.createElement('p');
 pre=doc.createElement('pre');
 form=doc.createElement('form');
 input=doc.createElement('input');
 button=doc.createElement('button');
 figure=doc.createElement('figure');
 figcaption=doc.createElement('figcaption');
 img=doc.createElement('img');
 table=doc.createElement('table');
 tr=doc.createElement('tr');
 th=doc.createElement('th');
 td=doc.createElement('td');
 ul=doc.createElement('ul');
 ol=doc.createElement('ol');
 li=doc.createElement('li');
 footer=doc.createElement('footer');
 */
/*
//create script
<script type="text/javascript" language="jQuery" src="jQuery.js"></script>
<script type="text/javascript" language="jQuery">
// jQuery document ready using anonymous function -------------
$(document).ready(function() {
    // ...
});
// jQuery using named function -----------------
$(document).ready(sample);
function sample() {
    // ...
}
// jQuery Shorthand ----------------------------
$(() => {
    // ...
});
// ES6 -----------------------------------------
// Use any of the following:
//   onDOMContentLoaded - DOM ready
//   onload - Page fully loaded
//   onloadeddata - Data loaded
onDOMContentLoaded = (() => {
    // ...
})();
*/
// create script
// const jsonData=JSON.parse(data);
/*
class cookies {
  constructor(mail) {
    this.email = mail;
  }
  present() {
    return 'I have an account with the email: ' + this.email;
  }
}
class User extends cookies {
  constructor(mail, usr) {
    super(mail);
    this.user = usr;
  }
  show() {
    return this.present() + ', it is ' + this.user;
  }
}
function val() {
  let account = new User("Ford", "Mustang"); 
  document.getElementById("para").innerHTML = account.show();
}
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};
function function_name(argument) {
  // body...
}
*/
/*
// blob
// create button
     const downloadFile = () => {
      const link = document.createElement("a");
      const content = document.querySelector("textarea").value;
// Create blob object with file content
      const file = new Blob([content], { type: 'text/plain' });
      link.href = URL.createObjectURL(file);
      link.download = "index.html";
      link.click();
      URL.revokeObjectURL(link.href);
}
*/