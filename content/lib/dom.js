/*
HTML DOM  JS
docType, xhtml5, meta, title, style, header;
head, title, body are html tag who doesnt need to be set as js var
because they already are reconize by the js DOM
*/
/* Document Type Declaration (docType) */
var html4Trans='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
var xhtml1Strict='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
var html5DocType='<!DOCTYPE html>';
/* html Tag */
var xhtml1='<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr" >';
var html5='<html lang="fr" >';
/* Encodage */
var html4Meta='<meta http:-equiv="Content-Type" content="text/html; charset=UTF-8">';
var xhtml1Meta='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
var html5Meta='<meta charset="UTF-8" />';
//
var main=document.createElement('main');
var header=document.createElement('header');
var footer=document.createElement('footer');
var section=document.createElement('section');
var aside=document.createElement('aside');
var nav=document.createElement('nav');
var article=document.createElement('article');
var figure=document.createElement('figure');
//
var ul=document.createElement('ul');
var li=document.createElement('li');
//
var para=document.createElement('p');
var div=document.createElement('div');
var img=document.createElement('img');
var input=document.createElement('input');
var hgroup=document.createElement('hgroup');
var mark=document.createElement('mark');
var time=document.createElement('time');
//
elP;
elP.setAttribute("style", "font-size:4em");
elP.innerHTML="This is new.";
dcm.body.appendChild(elP);
//
//dcm; dom; files; root; nodeJs; jsons;
dcm=document;
elP=dcm.createElement("p");
elDiv=dcm.createElement("div");
//
function $(id){
	return document.getElementById(id)
}
//
const nbreLiens=document.links.length;
//
onerror=errorHandler
function errorHandler(message, url, ligne){
	out ="Désolé, une erreur s'est produite.\n\n";
	out += "Erreur : " + message + "\n";
	out += "URL : " + url + "\n";
	out += "Ligne : " + ligne + "\n\n";
	out += "Cliquez sur OK pour continuer.\n\n";
	alert(out);
	return true;
}
//
doc=document;
function $(id){return doc.getElementById(id)}
/*
 zulu=doc.body.innerHTML;
 doc.write(zulu);
 doc.html.appendChild(head, body);
*/
/*
 docType=doc.createElement('!DOCTYPE');
 html=doc.createElement('html');
 meta=doc.getElementByTagName('meta');
 STYLE=doc.getElementByTagName('link');
*/
//
/*
 doc.title='eys';
 doc.head.appendChild(title);
*/
//
function hScript(){
hScript = doc.createElement("script");
hScript.type = "text/javascript";
hScript.src = "http://somedomain.com/somescript";
hScript.innerHTML='';
$("head").append(hScript);
}
function script(){
script = doc.createElement("script");
script.type = "text/javascript";
script.src = "http://somedomain.com/somescript";
script.innerHTML='';
$("body").append(script);
}
//
/*
 main=doc.createElement('main');
 div=doc.createElement('div');
 header=doc.createElement('header');
 //
 nav=doc.createElement('nav');
 link=doc.createElement('a');
/* <object data="img.video.jpg.html.mp4" type="image/jpg" width="400" height="300"></object> */
//
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
//
pre;
pre.setAttribute('id', 'txtnode');
pre.innerHTML='eYs';
doc.body.appendChild(pre);
//
let xp=document.createElement('p');
xp.innerHTML='eys eys';
document.body.appendChild(xp);