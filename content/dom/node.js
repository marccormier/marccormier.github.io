/*
for - loops through a block of code a number of times
for (let i=0;i<5;i++){text+="The number is "+i+"<br>";}
//
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/
win=window;
doc=document;
function $(id){return doc.getElementById(id) }
function O(i) {return typeof i == 'object' ? i : document.getElementById(i) }
function S(i) {return O(i).style }
function C(i) {return document.getElementsByClassname(i) }
hr=function hr() {doc.write("<hr>"); }
//
winInnerHeight=win.innerHeight;

innerHeight=function innerHeight() {document.write(innerHeight+"<br/>"+winInnerHeight); }

winOuterHeight=win.outerHeight;

outerHeight=function outerHeight() {document.write(outerHeight+"<br/>"+winOuterHeight); }

winInnerWidth=win.innerWidth;

innerWidth=function innerWidth() {document.write(innerWidth+"<br/>"+winInnerWidth); }

winOuterWidth=win.outerWidth;

outerWidth=function outerWidth() {document.write(outerWidth+"<br/>"+winOuterWidth); }
frame=function frame() {document.write(frame+"<br/>"+window.frameElement); }

winFrames=win.frames;

frames=function frames() {document.write(frames+"<br/>"+window.frames+winFrames); }
historyLength=function historyLength() {document.write(historyLength+"<br/>"+window.history.length); }
ownDoc=function ownDoc() {document.write(ownDoc+"<br/>"+document.body.ownerDocument); }
parentNode=function parentNode() {document.write(parentNode+"<br/>"+document.body.parentNode); }
