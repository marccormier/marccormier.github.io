doc=document;
function $(id){return doc.getElementById(id)}
//
doc.write("<br /><br />");
//
doc.write("<h1>DOM</h1>");
doc.write("<h2>!DOCTYPE</h2>");
doc.write("!DOCTYPE : "+doc.doctype);
doc.write("<hr>");
//
doc.write("<h2>html</h2>");
doc.write("html : "+doc.documentElement);
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
doc.write("<h2>URI</h2>");
doc.write("URI : "+doc.documentURI);
doc.write("<hr>");
//
doc.write("<h2>head</h2>");
doc.write("head : "+doc.head);
doc.write("<hr>");
//
doc.write("<h2>DOM implementation</h2>");
doc.write("DOM implementation : "+doc.implementation);
doc.write("<hr>");
//
doc.write("<h2>input Encoding Character set</h2>");
doc.write("input Encoding Charset : "+doc.inputEncoding);
doc.write("<hr>");
//
doc.write("<h2>document lastModified</h2>");
doc.write("lastModified : "+doc.lastModified);
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
doc.write("<h2>Title</h2>");
doc.write("Title : "+doc.title);
doc.write("<hr>");
//
doc.write("<h2>Domain</h2>");
doc.write("Domain : "+doc.domain);
doc.write("<hr>");
//
doc.write("<h2>Embed</h2>");
doc.write("Embed : "+doc.embeds);
doc.write("<hr>");
//
doc.write("<h2>URL</h2>");
doc.write("URL : "+doc.URL);
doc.write("<hr>");
//
doc.write("<h2>Document Referrer</h2>");
doc.write("document.referrer : "+document.referrer);
doc.write("<hr>");
//
doc.write("<h2>Scripts</h2>");
doc.write("Scripts : "+doc.scripts.length);
doc.write("<hr>");
//
doc.write("<h2>Links</h2>");
doc.write("Links : "+doc.links.length);
doc.write("Links 2 ID : "+doc.links[1].id);
doc.write("Links 3 URL : "+doc.links[2].href);
doc.write("<hr>");
//
doc.write("<h2>Images</h2>");
doc.write("Images : "+doc.images.length);
doc.write("Images 1 ID : "+doc.images[0].id);
doc.write("Images 2 Attribut border : "+doc.images[1].border);
doc.write("Images 3 Attribut src : "+doc.images[2].src);
doc.write("Images 4 Attribut width : "+doc.images[3].width);
doc.write("Images 4 Attribut height : "+doc.images[3].height);
doc.write("<hr>");
//
doc.write("<h2>Forms</h2>");
doc.write("Formulaires : "+doc.forms.length);
doc.write("Formulaires 1 name: "+doc.forms[0].name);
doc.write("Formulaires 2 ID: "+doc.forms[1].id);
doc.write("<hr>");
//
doc.write("<h2>Ancre</h2>");
doc.write("Ancre : "+doc.anchors.length);
doc.write("Ancre 1 : "+doc.anchors[0].text);
doc.write("Ancre 2 name: "+doc.anchors[1].name);
doc.write("<hr>");
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