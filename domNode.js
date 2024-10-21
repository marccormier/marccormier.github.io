/*
for - loops through a block of code a number of times
for (let i=0;i<5;i++){text+="The number is "+i+"<br>";}
//
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/
dBodyTxt=doc.body;
winInnerHeight=win.innerHeight;
innerHeight=function innerHeight() {
	document.write(innerHeight+"<br/>"+winInnerHeight); 
}
winOuterHeight=win.outerHeight;
outerHeight=function outerHeight() {
	document.write(outerHeight+"<br/>"+winOuterHeight); 
}
winInnerWidth=win.innerWidth;
innerWidth=function innerWidth() {
	document.write(innerWidth+"<br/>"+winInnerWidth); 
}
winOuterWidth=win.outerWidth;
outerWidth=function outerWidth() {
	document.write(outerWidth+"<br/>"+winOuterWidth); 
}
frame=function frame() {
	document.write(frame+"<br/>"+window.frameElement); 
}
winFrames=win.frames;
frames=function frames() {
	document.write(frames+"<br/>"+window.frames+winFrames); 
}
historyLength=function historyLength() {
	document.write(historyLength+"<br/>"+window.history.length); 
}
docType=function docType() {
	document.write(docType+"<br/>"+doc.doctype); 
}
docElement=function docElement() {
	document.write(docElement+"<br/>"+doc.documentElement); 
}
docUri=function docUri() {
	document.write(docUri+"<br/>"+doc.documentURI); 
}
docUrl=function docUrl() {
	document.write(docUrl+"<br/>"+doc.URL); 
}
docDomain=function docDomain() {
	document.write(docDomain+"<br/>"+doc.domain); 
}
docFormsLength=function docFormsLength() {
	document.write(docFormsLength+"<br/>"+doc.forms.length); 
}
docHead=function docHead() {
	document.write(docHead+"<br/>"+doc.head); 
}
docHeadTagName=function docHeadTagName() {
	document.write(docHeadTagName+"<br/>"+doc.head.tagName); 
}
docHeadFirstElementChildtagName=function docHeadFirstElementChildtagName() {
	document.write(docHeadFirstElementChildtagName+"<br/>"+doc.head.firstElementChildtagName); 
}
docImagesLength=function docImagesLength() {
	document.write(docImagesLength+"<br/>"+doc.images.length); 
}
docImplementation=function docImplementation() {
	document.write(docImplementation+"<br/>"+doc.implementation); 
}
docImplementationHasDom=function docImplementationHasDom() {
	document.write(docImplementationHasDom+"<br/>"+doc.implementation.hasFeature("DOM", "1.0")); 
}
docImplementationHasTesla=function docImplementationHasTesla() {
	document.write(docImplementationHasTesla+"<br/>"+doc.implementation.hasFeature("TESLA", "X")); 
}
docLastModified=function docLastModified() {
	document.write(docLastModified+"<br/>"+doc.lastModified); 
}
const docLastModDateObj=new Date(doc.lastModified);
docLastModifiedDateObj=function docLastModifiedDateObj() {
	document.write(docLastModifiedDateObj+"<br/>"+docLastModDateObj); 
}
docLinksLength=function docLinksLength() {
	document.write(docLinksLength+"<br/>"+doc.links.length); 
}
docReferrer=function docReferrer() {
	document.write(docReferrer+"<br/>"+doc.referrer); 
}
docScriptsLength=function docScriptsLength() {
	document.write(docScriptsLength+"<br/>"+doc.scripts.length); 
}
docTitle=function docTitle() {
	document.write(docTitle+"<br/>"+doc.title); 
}
docChildElementCount=function docChildElementCount() {
	document.write(docChildElementCount+"<br/>"+doc.childElementCount); 
}
docChildNodes=function docChildNodes() {
	document.write(docChildNodes+"<br/>"+doc.childNodes); 
}
docChildren=function docChildren() {
	document.write(docChildren+"<br/>"+doc.children); 
}
docFirstChild=function docFirstChild() {
	document.write(docFirstChild+"<br/>"+doc.firstChild); 
}
docFirstElementChild=function docFirstElementChild() {
	document.write(docFirstElementChild+"<br/>"+doc.firstElementChild); 
}
docLastChild=function docLastChild() {
	document.write(docLastChild+"<br/>"+doc.lastChild); 
}
docLastElementChild=function docLastElementChild() {
	document.write(docLastElementChild+"<br/>"+doc.lastElementChild); 
}
docNextSibling=function docNextSibling() {
	document.write(docNextSibling+"<br/>"+doc.nextSibling); 
}
docNextElementSibling=function docNextElementSibling() {
	document.write(docNextElementSibling+"<br/>"+doc.nextElementSibling); 
}
docNodeName=function docNodeName() {
	document.write(docNodeName+"<br/>"+doc.nodeName); 
}
docNodeType=function docNodeType() {
	document.write(docNodeType+"<br/>"+doc.nodeType); 
}
docNodeValue=function docNodeValue() {
	document.write(docNodeValue+"<br/>"+doc.nodeValue); 
}
ownDoc=function ownDoc() {
	document.write(ownDoc+"<br/>"+document.body.ownerDocument); 
}
parentNode=function parentNode() {
	document.write(parentNode+"<br/>"+document.parentNode); 
}
parentElement=function parentElement() {
	document.write(parentElement+"<br/>"+document.parentElement); 
}
docPreviousSibling=function docPreviousSibling() {
	document.write(docPreviousSibling+"<br/>"+doc.previousSibling); 
}
docPreviousElementSibling=function docPreviousElementSibling() {
	document.write(docPreviousElementSibling+"<br/>"+doc.previousElementSibling); 
}
docScrollHeight=function docScrollHeight() {
	document.write(docScrollHeight+"<br/>"+doc.scrollHeight); 
}
docScrollWidth=function docScrollWidth() {
	document.write(docScrollWidth+"<br/>"+doc.scrollWidth); 
}
docStyle=function docStyle() {
	document.write(docStyle+"<br/>"+doc.style); 
}