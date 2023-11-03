doc.write('<center> <h1>Interface HTML DOM Node</h1> </center> <h2>Proprietes</h2><h2>Methodes</h2><hr><h2>[Objet Window]</h2>');
// Console
// Document
doc.write("<h3>Frames</h3>"); frames(); frames;
doc.write("<h3>frameElement</h3>"); frame(); 
doc.write("<h3>innerHeight</h3>"); innerHeight(); 
doc.write("<h3>innerWidth</h3>"); innerWidth(); 
doc.write("<h3>outerHeight</h3>"); outerHeight(); 
doc.write("<h3>outerWidth</h3>"); outerWidth(); 
doc.write("<h2>Console</h2>"); 
doc.write("<h2>History</h2>"); historyLength(); 
doc.write("<h2>Location</h2>"); 
doc.write("<h2>Navigator</h2>"); 
doc.write("<h2>Screen</h2>"); 
hr();
doc.write("<h2>HTML DOM Documents</h2>");
doc.write("<h3>doctype</h3>"); docType();
doc.write("<h3>URL</h3>"); docUrl();
doc.write("<h3>documentElement</h3>"); docElement();
doc.write("<h3>URI</h3>"); docUri();
doc.write("<h3>Domain</h3>"+document.domain); docDomain();
/*
The domain property returns the domain name of the server (the document was loaded from).
The domain property returns null if the document was created in memory.
*/
doc.write("<h3>Forms</h3>"); docFormsLength();
//doc.write("Formulaires 1 name: "+doc.forms[0].name);
//doc.write("Formulaires 2 ID: "+doc.forms[1].id);
doc.write("<h3>Head</h3>"); docHead();
doc.write("<h4>Head tagName</h4>"); docHeadTagName();
doc.write("<h4>Head FirstElementChildtagName</h4>"); docHeadFirstElementChildtagName();
doc.write("<h3>Images</h3>"); docImagesLength();
//doc.write("Images 1 ID : "+doc.images[0].id);
//doc.write("Images 2 Attribut border : "+doc.images[1].border);
//doc.write("Images 3 Attribut src : "+doc.images[2].src);
//doc.write("Images 4 Attribut width : "+doc.images[3].width);
//doc.write("Images 4 Attribut height : "+doc.images[3].height);
doc.write("<h3>DOM implementation</h3>"); docImplementation();
doc.write("<h4>DOMimplementation hasFreature 'DOM' '1.0'</h4>"); docImplementationHasDom();
doc.write("<h4>DOMimplementation hasFreature 'TESLA' 'X'</h4>"); docImplementationHasTesla();
doc.write("<h3>lastModified</h3>"); docLastModified();
doc.write("<h4>lastModified property into a date object</h4>"); docLastModifiedDateObj();
doc.write("<h3>Links</h3>");
//doc.write("Links 2 ID : "+doc.links[1].id);
//doc.write("Links 3 URL : "+doc.links[2].href);
docLinksLength();
// querySelector
doc.write("<h3>Referrer</h3>"); docReferrer();
doc.write("<h3>Scripts length</h3>"); docScriptsLength();
doc.write("<h3>Title</h3>"); docTitle();
doc.write("<h3>HTML DOM Elements</h3>");
doc.write("<h3>childElementCount</h3>"); docChildElementCount();
doc.write("<h3>childNodes</h3>"); docChildNodes();
/*
cNl=doc.body.childNodes.length;
doc.write("<h2>childNodes.length</h2>"+cNl);
doc.write("<hr>");
*/
doc.write("<h3>children</h3>"); docChildren();
doc.write("<h3>firstChild</h3>"); docFirstChild();
doc.write("<h3>firstElementChild</h3>"); docFirstElementChild();
doc.write("<h3>lastChild</h3>"); docLastChild();
doc.write("<h3>lastElementChild</h3>"); docLastElementChild();
doc.write("<h3>nextSibling</h3>"); docNextSibling();
doc.write("<h3>nextElementSibling</h3>"); docNextElementSibling();
doc.write("<h3>nodeName</h3>"); docNodeName();
doc.write("<h3>nodeType</h3>"); docNodeType();
doc.write("<h3>nodeValue</h3>"); docNodeValue();
/*
offsetHeight  Returns the height of an element, including padding, border and scrollbar
offsetWidth Returns the width of an element, including padding, border and scrollbar
offsetLeft  Returns the horizontal offset position of an element
offsetParent  Returns the offset container of an element
offsetTop Returns the vertical offset position of an element
outerHTML Sets or returns the content of an element (including the start tag and the end tag)
outerText Sets or returns the outer text content of a node and its descendants
*/
doc.write("<h3>ownerDocument</h3>"); ownDoc();
doc.write('<h3>parentNode</h3>'); parentNode();
doc.write('<h3>parentElement</h3>'); parentElement();
doc.write("<h3>previousSibling</h3>"); docPreviousSibling();
doc.write("<h3>previousElementSibling</h3>"); docPreviousElementSibling();
doc.write("<h3>scrollHeight</h3>"); docScrollHeight();
doc.write("<h3>scrollWidth</h3>"); docScrollWidth();
doc.write("<h3>Style</h3>"); docStyle();
hr();
doc.write("<h3>HTML DOM Attributes</h3>");
doc.write(doc.attributes);
doc.write("<h3>NamedNodeMap</h3>");
doc.write("<h3>DOM HTMLCollection</h3>");
doc.write("<h3>HTML DOM NodeList</h3>");
doc.write("<h3>HTML DOMTokenList</h3>");
doc.write("<h3>HTML DOM Style Object</h3>");
hr();
hr();
doc.write("<h2>html</h2>");
doc.write(doc.documentElement+
  "<br>"+doc.documentElement.parentNode+
  "<br>"+doc.documentElement.parentElement);
doc.write("<hr>");
//
doc.write("<h2>cookie</h2>");
doc.write("cookie : "+doc.cookie.length);
doc.write("<hr>");
//
doc.write("<h2>Browser Mode</h2>");
doc.write("Browser Mode : "+doc.documentMode);
doc.write("<hr>");
//
doc.write("<h2>input Encoding Character set</h2>");
doc.write("input Encoding Charset : "+doc.inputEncoding);
doc.write("<hr>");
//
doc.write("<h2>Loading status</h2>");
doc.write("readyState : "+doc.readyState);
doc.write("<hr>");
//
doc.write("<h2>error checking is enforced</h2>");
doc.write("strict Error Checking : "+doc.strictErrorChecking);
doc.write("<hr>");
//
doc.write("<h2>Embed</h2>");
doc.write("Embed : "+doc.embeds);
doc.write("<hr>");
//
doc.write("<h2>Ancre</h2>");
doc.write("Ancre : "+doc.anchors.length);
//doc.write("Ancre 1 : "+doc.anchors[0].text);
//doc.write("Ancre 2 name: "+doc.anchors[1].name);
doc.write("<hr>");
//
doc.write("<h2>childNodes[i] .nodeName .nodeType .nodeValue</h2><br/>console.log(text);");
const nodeList=document.body.childNodes;
let text="";
for(let i=0;i<nodeList.length;i++){text+=nodeList[i].nodeName+" "+nodeList[i].nodeType+" "+nodeList[i].nodeValue+"<br><br>";}
console.log(text);
doc.write("<hr>");
//
doc.write('<br/><center>&#169 2023 Marc Cormier</center><br/>');