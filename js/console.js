/*reset*/
txt="Remember to open the console (Press F12).";
window.document.body.append(txt);
/*dom html obj*/
/* window obj (console)*/
console.clear();
//
console.groupCollapsed('screen : [object screen]');
console.log('screen.availHeight : '+screen.availHeight);
/* Returns the height of the screen (excluding the Windows Taskbar) */
console.log('screen.availWidth : '+screen.availWidth);
/* Returns the width of the screen (excluding the Windows Taskbar) */
console.log('screen.colorDepth : '+screen.colorDepth);
/* Returns the bit depth of the color palette for displaying images */
console.log('screen.height : '+screen.height);
/* Returns the total height of the screen */
console.log('screen.pixelDepth : '+screen.pixelDepth);
/* Returns the color resolution (in bits per pixel) of the screen */
console.log('screen.width : '+screen.width);
/* Returns the total width of the screen */
console.groupEnd();
//
console.groupCollapsed('window : [object Window]');
console.log(window);
console.log('window.closed : '+window.closed);
console.log('window.frameElement : '+window.frameElement);
console.log('window.frames : '+window.frames);
console.log(window.frames);
console.log('window.innerHeight : '+window.innerHeight);
console.log('window.innerWidth : '+window.innerWidth);
console.log('window.length : '+window.length);
console.log('window.name : '+window.name);
console.log('window.opener : '+window.opener);
console.log('window.outerHeight : '+window.outerHeight);
console.log('window.outerWidth : '+window.outerWidth);
console.log('window.pageXOffset : '+window.pageXOffset);
console.log('window.pageYOffset : '+window.pageYOffset);
console.log('window.parent : '+window.parent);
console.log('window.screen : '+window.screen);
console.log('window.screenLeft : '+window.screenLeft);
console.log('window.screenTop : '+window.screenTop);
console.log('window.screenX : '+window.screenX);
console.log('window.screenY : '+window.screenY);
console.log('window.scrollX : '+window.scrollX);
console.log('window.scrollY : '+window.scrollY);
console.log('window.self : '+window.self);
console.groupEnd();
//
console.groupCollapsed('history : [object History]');
console.log(history);
console.groupEnd();
//
console.groupCollapsed('navigator : [object Navigator]');
console.log(navigator);
console.groupEnd();
//
console.groupCollapsed('storage : [object Storage]');
console.info('sessionStorage');
console.log(sessionStorage);
console.info('localStorage');
console.log(localStorage);
console.groupEnd();
//
console.groupCollapsed('console : [object Console]');
console.log(console);
//Writes an error message to the console if a assertion is false
console.assert();
console.count();
console.error('console.error("error");');
console.info('console.info("info");');
console.log('console.log("log");');
console.info('console.table(["html","css","js"]);');
console.table(['html','css','js']);
console.time();
console.timeEnd();
console.trace();
console.warn('console.warn("warn");');
console.groupEnd();
//
console.groupCollapsed('document : [object HTMLDocument]');
console.log(document);
console.log('document.activeElement : '+window.document.activeElement);
//window.document.addEventListener();
//window.document.adoptNode();
console.log('document.baseURI : '+window.document.baseURI);
console.log('document.body : '+window.document.body);
console.log(window.document.body);
console.log('document.characterSet : '+window.document.characterSet);
//window.document.close();
console.log('document.cookie : '+window.document.cookie);
/*dom*/
//window.document.createAttribute();
//window.document.createComment();
//window.document.createDocumentFragment();
//window.document.createElement();
//window.document.createEvent();
//window.document.createTextNode();
/**/
console.log('document.defaultView : '+window.document.defaultView);
console.log('document.designMode : '+window.document.designMode);
console.log('document.doctype : '+window.document.doctype);
console.log(window.document.doctype);
console.log('document.documentElement : '+window.document.documentElement);
console.log(window.document.documentElement);
console.log('document.documentURI : '+window.document.documentURI);
console.log('document.domain : '+window.document.domain);
console.groupCollapsed('[object HTMLCollection]');
console.log('document.embeds : '+window.document.embeds);
console.log(window.document.embeds);
console.log('document.forms : '+window.document.forms);
console.log(window.document.forms);
console.log('document.images : '+window.document.images);
console.log(window.document.images);
console.log('document.links : '+window.document.links);
console.log(window.document.links);
console.log('document.scripts : '+window.document.scripts);
console.log(window.document.scripts);
console.groupEnd();
//execCommand()   Deprecated
/**/
//window.document.getElementById();
function $(id){return document.getElementById(id)};
function O(i){return typeof i=='object' ? i : document.getElementById(i)};
// O(i).style
function S(i){return O(i).style};
//window.document.getElementsByClassName();
function $(name){document.getElementsByClassName(name)};
function C(i){return document.getElementsByClassname(i)};
//window.document.getElementsByName();
//window.document.getElementsByTagName();
function $(name){document.getElementsByTagName(name)};
//window.document.hasFocus();
/**/
console.log('document.head : '+window.document.head);
console.log(window.document.head);
console.log('document.implementation : '+window.document.implementation);
console.log(window.document.implementation);
//window.document.importNode();
console.log('document.lastModified : '+window.document.lastModified);
//window.document.normalize();
//window.document.open();
//window.document.querySelector();
//window.document.querySelectorAll();
console.log('document.readyState : '+window.document.readyState);
console.log('document.referrer : '+window.document.referrer);
//window.document.removeEventListener();
console.log('document.title : '+window.document.title);
console.log('document.URL : '+window.document.URL);
//window.document.write();
//window.document.writeln();
console.groupEnd();
//
console.groupCollapsed('location : [object location]');
console.log(location);
//console.location.assign();
console.log('location.assign("...");');
/* loads a new document */
console.log('location.hash : '+location.hash);
/*  Sets or returns the anchor part (#) of a URL */
console.log('location.href : '+location.href);
/* returns the href (URL) of the current page */
console.log('location.host : '+location.host);
/* Sets or returns the hostname and port number of a URL */
console.log('location.hostname : '+location.hostname);
/* returns the domain name of the web host */
console.log('location.origin : '+location.origin);
/* Returns the protocol, hostname and port number of a URL */
console.log('location.pathname : '+location.pathname);
/* returns the path and filename of the current page */
console.log('location.port : '+location.port);
/* Sets or returns the port number of a URL */
console.log('location.protocol : '+location.protocol);
/* returns the web protocol used (http: or https:) */
console.log('location.search : '+location.search);
/* Sets or returns the querystring part of a URL */
console.groupEnd();
//
console.groupCollapsed('Elements');
const elements=window.document.getElementsByTagName("*");
for (let i=0;i<elements.length;i++) {
console.log(elements[i]);
}
console.groupEnd();