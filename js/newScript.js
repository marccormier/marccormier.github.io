document.addEventListener("DOMContentLoaded", function(event) {     
needles=localStorage.getItem("needles");
needles=JSON.parse(needles);
bScript=document.createElement("script");
bScript.type="text/javascript";
bScript.innerHTML=needles;
document.head.append(bScript);
});
//
function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
content=O('content');
//
function home() {
   O('content').innerHTML="<center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function about() {O('content').innerHTML='<h2>Information Personnel</h2><hr><p>Mon nom est Marc et j&#39ai 38 ans.  Je vie dans une grande ville de plus ou moins 423 000 habitants, située au Québec, Canada. <br />Magnifique region, que j&#39affectionne tout particulierement. J&#39estime que l&#39age, la couleur, la religion, l&#39apparence physique, tout ce qui nous distingue (et nous sépare souvent aussi) au quotidien n&#39a pas lieu d&#39être sur le net. <br/>Je documente tout ce que j&#39apprends et aide les gens à commencer dans le codage. <br />Mon site n&#39a pas de publicités, de sponsors ou de &#39bullshit&#39. <br /><br />Je n&#39aime pas parler de moi, mais quand je visite un site et que je vois une rubrique consacree au webmaster, je clique sur le lien, et donc Merci de sacrifie de votre precieux temps afin de visite mon site, je souhaite exprimer ma gratitude a mes visiteurs.<br /><br />J&#39espere que votre consultation répondra a vos attentes. <br /><br />Je suis très intéressé par le codage, après un peu plus de 20 ans de presence sur le net, j&#39ai continuer à apprendre le codage avec <a href="https://www.sololearn.com/">sololearn</a>. Je me suis ensuite inscrit au formations informatique à l&#39<a href="https://www.formation-ifp.com/">institut de formation professionnel</a> (Entretien &#38; Réparation D&#39ordinateur, Spécialiste Internet et Programmation JAVA).<br />Toussent terminer avec une note finale de plus de 80% ainsi j&#39ai aussi choisis de creer un site sans pour autant tout vous devoiler, car le net reste malgre tout un monde virtuel, et j&#39aime garder une petite part du mystere sur ma personalitée.<br /><br />Si vous appréciez mon contenu, pensez à soutenir ce que je fais.</p><br><br><b><a class="domAlink" style="color:darkgreen;font-size:2em;" onclick="linktree()">Linktr.ee</a></b>'; }
function linktree() {window.open("https://linktr.ee/mcormier");}
//
function article() {
  O('content').innerHTML='<h2>Naviguer en sécurité</h2>'; 
}
//
function imgGallery() {
O('content').innerHTML='';
const imgGallery=document.createElement("OBJECT");
imgGallery.setAttribute("data", "gallery.html");
imgGallery.setAttribute("width", "875px");
imgGallery.setAttribute("height", "335px");
imgGallery.setAttribute("id", "imgGallery");
O('content').appendChild(imgGallery);
}
//
function domStyles() {
O('content').innerHTML='';
const htDomStyle=document.createElement("OBJECT");
htDomStyle.setAttribute("data", "htmlDomStyle.html");
htDomStyle.setAttribute("width", "875px");
htDomStyle.setAttribute("height", "335px");
htDomStyle.setAttribute("class", "htDomStyle");
O('content').appendChild(htDomStyle);
}
//
function htmlDOMnode() {
O('content').innerHTML='';
const htDom=document.createElement("OBJECT");
htDom.setAttribute("data", "htmlDOM.html");
htDom.setAttribute("width", "875px");
htDom.setAttribute("height", "335px");
htDom.setAttribute("class", "htDom");
O('content').appendChild(htDom);
}
//
function peridotColorPattern() {
O('content').innerHTML='';
const peridotCpattern=document.createElement("OBJECT");
peridotCpattern.setAttribute("data", "peridotColorPattern.htm");
peridotCpattern.setAttribute("width", "875px");
peridotCpattern.setAttribute("height", "335px");
peridotCpattern.setAttribute("class", "peridotCpattern");
O('content').appendChild(peridotCpattern);
}
function htmlCompiler() {
O('content').innerHTML='';
const htmlCompil=document.createElement("OBJECT");
htmlCompil.setAttribute("data", "compiler/htmlCompiler.htm");
htmlCompil.setAttribute("width", "875px");
htmlCompil.setAttribute("height", "335px");
htmlCompil.setAttribute("class", "htmlCompil");
O('content').appendChild(htmlCompil);
}
//
function binCompiler() {
O('content').innerHTML='';
const binCompil=document.createElement("OBJECT");
binCompil.setAttribute("data", "compiler/binaryCompiler.htm");
binCompil.setAttribute("width", "875px");
binCompil.setAttribute("height", "335px");
binCompil.setAttribute("class", "binCompil");
O('content').appendChild(binCompil);
}
//
function cssSnips() {
O('content').innerHTML='';
const cssSnip=document.createElement("OBJECT");
cssSnip.setAttribute("data", "cssSnip.htm");
cssSnip.setAttribute("width", "875px");
cssSnip.setAttribute("height", "335px");
cssSnip.setAttribute("class", "cssSnip");
O('content').appendChild(cssSnip);
}
//
function jQuerySnips() {
O('content').innerHTML='';
const jQuerySnip=document.createElement("OBJECT");
jQuerySnip.setAttribute("data", "jQuerySnip.htm");
jQuerySnip.setAttribute("width", "875px");
jQuerySnip.setAttribute("height", "335px");
jQuerySnip.setAttribute("class", "jQuerySnip");
O('content').appendChild(jQuerySnip);
}
//
function skills() {O('content').innerHTML='<h2>Mes Compétences</h2><hr><center><ul><li>JAVA</li><li>PHP</li><li>MySQL</li><li>JavaScript</li><li>jQuery</li><li>CSS3</li><li>HTMl5</li></ul></center>'; }
const htmlCodes='<h3>HTML (.htm - .html)</h3> <ul>Color Picker<br/> <input type="color" id="colorpicker" value="#000000" style="margin-left:0px;" /> <li><a class="domAlink" onclick="passwordGenerator(random_number)">Générateur de mot de passe</a></li> <li><a class="domAlink" onclick="winNav()">Navigator Properties</a></li> <li><a class="domAlink" onclick="cssSnips()">CSS html DOM Snippets</a></li> <li><a class="domAlink" onclick="domStyles()">JS html DOM Styles</a></li> <li><a class="domAlink" onclick="htmlDOMnode()">JS HTML DOM Interface</a></li> <li><a onclick="peridotColorPattern()">Peridot color pattern</a></li> <li><a class="domAlink" onclick="htmlCompiler()">Compilateur HTML</a></li> <li><a class="domAlink" onclick="binCompiler()">Compilateur Binaire</a></li> <li><a class="subTcodes">Window Object</a></li> <li><a>HTML Events</a></li> <li><a href="storage.htm"><i>web Storage</i></a></li> <li><a href="RGBAcolors.htm"><i>RGBA Colors</i></a></li> <li><a href="skydiveLoggerApp">Skydive Logger APP Data To HTML Table</a></li> </ul> <br/>';
const cssCodes='<h3>CSS (.css)</h3><ul><li><a>CSS Needles Library</a></li></ul><br/>';
const jsCodes='<h3>JavaScript (.js)</h3><ul><li><a>AJAX</a></li><li><a>Time</a></li><li><a>Gestion d&#39opérations</a></li><li><a>Générateur de Table HTML</a></li><li><a>OSC</a></li><li><a>needles</a></li></ul> <br/>';
const jQueryCodes='<h3>jQuery (.js)</h3> <ul> <li><a>Gestion des mouvements et des boutons de la souris</a></li> <li><a class="domAlink" onclick="jQuerySnips()">jQuery Snippets</a></li> </ul> <br/>';
const phpCodes='<h3>PHP (.php)</h3><ul><li><a>Gestion de fichiers</a></li><li><a>Appels Système</a></li><li><a>Gestion de Formulaire</a></li><li><a>Gestion de cookies</a></li><li><a>Gestion d&#39utilisateurs</a></li><li><a>Gestion de Session</a></li><li><a>Gestion d&#39erreurs</a></li></ul><br/>';
const javaCodes= ' <h3>JAVA (.java)</h3> <ul> <li><a>Coffee Machine</a></li> <li><a>Gestion de fichiers</a></li> <li><a>Gestion de bulletin de notes</a></li> <li><a>Gestion de comptes bancaire</a></li><li><a>Sapin en Swing</a></li></ul><br/> ';
const shellScriptCodes='<h3>Shell Scripting Language (.bat - .cmd - .exe)</h3><ul><li><a>file Sorting</a></li> <li><a>List Files In Folder</a></li> <li><a>Windows error Fixer</a></li> <li><a>Clone File Checker</a></li> <li><a>clear Cache</a></li> </ul><br/>';
const mslCodes='<h3>mSL (.ini)</h3><ul><li><a>MCBrady</a></li></ul>';
function codes() {O('content').innerHTML='<h2>Codes</h2><hr><p>Jusqu&#39à présent, j&#39ai écrit quelques codes :</p>'+ htmlCodes+cssCodes+jsCodes+jQueryCodes+phpCodes+javaCodes+shellScriptCodes+mslCodes; }
//
function Products() {
   O('content').innerHTML="<h2>Produits</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function HTML() {
   O('content').innerHTML="<h2>HTML</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function CSS() {
   O('content').innerHTML="<h2>CSS</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function JAVASCRIPT() {
   O('content').innerHTML="<h2>JAVASCRIPT</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function NodeJS() {
   O('content').innerHTML="<h2>NodeJS</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function PHP() {
   O('content').innerHTML="<h2>PHP</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function SQL() {
   O('content').innerHTML="<h2>SQL</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }
function JAVA() {
   O('content').innerHTML="<h2>JAVA</h2><center> <img src='img/maintenance.jpg'> <p id='lastModif'></p> </center> "; 
   document.getElementById('lastModif').innerHTML="<i>lastModified</i> :"+document.lastModified;
 }

//
function winNav(){
    var caracteristiquesNavigateur = "";
    caracteristiquesNavigateur = "<h2>navigator Properties</h2><br/>";
    caracteristiquesNavigateur += "Code du navigateur : "
    + navigator.appCodeName + "<br>";
    caracteristiquesNavigateur += "Nom du navigateur : "
    + navigator.appName + "<br>";
    caracteristiquesNavigateur += "Version : "
    + navigator.appVersion + "<br>";
    caracteristiquesNavigateur += "Support des cookies : "
    + navigator.cookieEnabled + "<br>";
    caracteristiquesNavigateur += "Géolocation : "
    + navigator.geolocation + "<br>";
/* + coor + "<br>"; */
    caracteristiquesNavigateur += "javaEnabled : "
    + navigator.javaEnabled() + "<br>";
    caracteristiquesNavigateur += "Language : "
    + navigator.language + "<br>";
    caracteristiquesNavigateur += "onLine : "
    + navigator.onLine + "<br>";
    caracteristiquesNavigateur += "Systeme d'exploitation : "
    + navigator.platform + "<br>";
    caracteristiquesNavigateur += "Product : "
    + navigator.product + "<br>";    
    caracteristiquesNavigateur += "User-agent header : "
    + navigator.userAgent + "<br>";
    caracteristiquesNavigateur += "User-agent language : "
    + navigator.systemLanguage + "<br>";
    O('content').innerHTML=caracteristiquesNavigateur;
}
//
function members() {
  O('content').innerHTML="<h2>Tableau de bord</h2>"+
  "<img style='width:300px;height:auto;' src='img/enConstruction.jpg'><br>"+
  "<center> <input type='button' value='inscription / connexion' onclick='')'> </center>";
let storedText;
fetch('https://ipinfo.io/json?callback') .then(function(response) {
  response.text().then(function(text) {
    let storedText = text;
    let str=storedText.toString();
    let dt=str.slice(1, -48);
    O('content').innerHTML+="<br>"+dt;
  });
});
O('content').innerHTML+=
'cookiesEnabled'+navigator.cookieEnabled+"<br>"+
'navigator-appName'+navigator.appName+"<br>"+
'navigator-appCodeName'+navigator.appCodeName+"<br>"+
'navigator-product'+navigator.product+"<br>"+
'navigator-appVersion'+navigator.appVersion+"<br>"+
'navigator-userAgent'+navigator.userAgent+"<br>"+
'navigator-platform'+navigator.platform+"<br>"+
'navigator-language'+navigator.language+"<br>"+
'navigator-onLine'+navigator.onLine+"<br>"+
'navigator-javaEnabled()'+navigator.javaEnabled()+"<br>";
//
setTimeout(function(){
  let text;
  let uFname=document.getElementsByTagName('h2')[0];
  let uName=sessionStorage.getItem('uFname');
//if (uName!=null || uName!=""){uFname.innerHTML=uName;}
//if (sessionStorage.uFname){uFname.innerHTML=sessionStorage.uFname;}
  let person = prompt("S'il vous plaît entrez votre nom:", "");
  if (person == null || person == "") {text = "Cancelled prompt.";}
  else if(person == "marc") {window.open("https://marccormier.github.io/storage.htm");}
   else {text = "Bonjour "+person+"!";}
  uFname.innerHTML = text;
  sessionStorage.setItem('uFname', text);
}, 1000); //Time before execution
//
bientot();
}
//
function bientot() {
  out = "Section en construction."+"\n";
  out += " \n";
  out += "Cliquez sur OK pour Continuer.\n\n";
  alert(out);
  return true;
}
//
let introService="<center><h2>Services</h2><input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='tarif()' value='Tarif' /><input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='zone()' value='Zone de service' /></center><hr>";
//function services() {window.open('Service')};
function services() {O('content').innerHTML=
introService+
"<h3><a onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"Débutant - Intermédiaire - Expert<br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function reparation() {O('content').innerHTML=
introService+
"<h3>ENTRETIEN & RÉPARATION D'ORDINATEUR</h3>"+
"<li>Diagnostique des problèmes matériel ou logiciel</li>"+
"<li>Récupération de mots de passe</li>"+
"<li>Récupération et sauvegarde de données</li>"+
"<li>Nettoyage à l'air de vos équipements électroniques et ordinateurs</li>"+
"<li>Remplacement de disque dur</li>"+
"<li>Installation et configuration d’imprimante</li>"+
"<li>Élimination de virus</li>"+
"<li>nettoyage d’ordinateur Formatage</li>"+
"<li>installation de Windows</li>"+
"<br>"+
"<h3><a onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"Débutant - Intermédiaire - Expert<br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function reseau() {O('content').innerHTML=
introService+
"<h3><a onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3>MAINTENANCE & DÉPANNAGE RÉSEAUX</h3>"+
"<li>Configuration de réseau sans-fil</li>"+
"<li>Câblages</li>"+
"<li>Codage des données</li>"+
"<li>topologie</li>"+
"<li>protocoles</li>"+
"<li>adressage</li>"+
"<br>"+
"<h3><a onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"Débutant - Intermédiaire - Expert<br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function graph() {O('content').innerHTML=
introService+
"<h3><a onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3>CONCEPTION GRAPHIQUE & WEBDESIGN</h3>"+
"<li>Logos</li>"+
"<li>templates Web</li>"+
"<li>plaquettes publicitaires</li>"+
"<li>cartes de visite</li>"+
"<li>newsletters...</li>"+
"<br>"+
"<h3><a onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"Débutant - Intermédiaire - Expert<br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function integ() {O('content').innerHTML=
introService+
"<h3><a onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3>INTÉGRATION (X)HTML / CSS</h3>"+
"<li>Codage à la main respectueux des standards du Web</li>"+
"<br>"+
"<h3><a onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"Débutant - Intermédiaire - Expert<br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function proWeb() {O('content').innerHTML=
introService+
"<h3><a onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3>GESTION DE PROJETS WEB</h3>"+
"<li>Site vitrine</li>"+
"<li>corporate</li>"+
"<li>évènementiel</li>"+
"<li>e-commerce</li>"+
"<li>intranet</li>"+
"<li>application mobile</li>"+
"<br>"+
"<h3><a onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"Débutant - Intermédiaire - Expert<br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function valRef() {O('content').innerHTML=
introService+
"<h3><a onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</h3>"+
"<li>Accessibilité & ergonomie des pages web</li>"+
"<br>"+
"<h3><a onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"Débutant - Intermédiaire - Expert<br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function multiFrame() {O('content').innerHTML=
introService+
"<h3><a onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3>CONCEPTION MULTI-PLATEFORMES</h3>"+
"<li>Compatible tous supports, tablette & application mobile</li>"+
"<br>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li>Débutant - Intermédiaire - Expert</li><br><br>"+
"Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.<br/><br>";
}
function tarif() {O('content').innerHTML="<h2>Tarif</h2>"+ "Estimation à partir de 20$ * <br/><br/>"+ "Tarif à partir de 45$ de l'heure <br/><br/>"+ "*** Service commercial: a partir de 75$ de l'heure *** <br/><br/>"+ "Service d'assistance en ligne pour 15$ jusqu'à 30 minutes!<br/><br/>"+ "Service rapide à partir de $85<br/>"+ "** prix minimum pour un déplacement: 1 heure selon tarif.<br/>"+ "* Minimum 1 heure  *<br/><br/>"+ "* peut varier en fonction des certifications et/ou compétences du technicien ou administrateur reseaux.<br/><br/>"+ "** prix sujet à changement sans préavis. pour plus de détails visitez notre site web régulièrement.<br/><br/>"+ "<input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='zone()' value='Zone de service' /><br/><br/>"; }
function zone() {O('content').innerHTML="<h2>Zone de service</h2>"+ "<p style='text-decoration:line-through;'>Rive-Nord</p>"+ "Laval<br/>"+ "Montréal<br/>"+ "<p style='text-decoration:line-through;'>Rive-Sud</p>"+ "<input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='tarif()' value='Tarif' />"; }