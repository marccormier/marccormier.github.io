/*
HTML DOM  JS
docType, xhtml5, meta, title, style, header,
window, document, head, title, body 
are HTML tag who doesnt need to be set as var
because they already are reconize by the DOM
// JSON or XML
DocTYPE declaration
var html4Trans='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
var xhtml1Strict='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
var html5DocType='<!DOCTYPE html>';
html 
var xhtml1='<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr" >';
var html5='<html lang="fr" >';
Encodage META
var html4Meta='<meta http:-equiv="Content-Type" content="text/html; charset=UTF-8">';
var xhtml1Meta='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
var html5Meta='<meta charset="UTF-8" />';
*/
comment=document.createComment()
// diff between DOM and jsNeedles (propriétés, méthodes)
/*
document.getElementById(id) Find an element by element id
document.getElementsByTagName(name) Find elements by tag name
document.getElementsByClassName(name) Find elements by class name
//
element.innerHTML =  new html content Change the inner HTML of an element
element.attribute = new value Change the attribute value of an HTML element
element.style.property = new style  Change the style of an HTML element
//
element.setAttribute(attribute, value)  Change the attribute value of an HTML element
//
document.createElement(element) Create an HTML element
document.removeChild(element) Remove an HTML element
document.appendChild(element) Add an HTML element
document.replaceChild(new, old) Replace an HTML element
document.write(text)  Write into the HTML output stream
*/
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