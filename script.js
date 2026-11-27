function O(i) { return typeof i == 'object' ? i : document.getElementById(i) };
const content=O('content');
function home() {O('content').innerHTML="<center> <img src='img/buildingSite.jpg'> </center> ";}
function about() {O('content').innerHTML='<h2>Information Personnel</h2><hr><p id="contentP">Mon nom est Marc et j&#39ai 38 ans.  Je vie dans une grande ville de plus ou moins 423 000 habitants, située au Québec, Canada. <br />Magnifique region, que j&#39affectionne tout particulierement. J&#39estime que l&#39age, la couleur, la religion, l&#39apparence physique, tout ce qui nous distingue (et nous sépare souvent aussi) au quotidien n&#39a pas lieu d&#39être sur le net. <br/>Je documente tout ce que j&#39apprends et aide les gens à commencer dans le codage. <br />Mon site n&#39a pas de publicités, de sponsors ou de &#39bullshit&#39. <br /><br />Je n&#39aime pas parler de moi, mais quand je visite un site et que je vois une <a href="#" onclick="alert("Les Recherches de Marc. Page En Construction.")"> rubrique consacree au webmaster, je clique sur le lien,</a> et donc Merci de sacrifie de votre precieux temps afin de visite mon site, je souhaite exprimer ma gratitude a mes visiteurs.<br /><br />J&#39espere que votre consultation répondra a vos attentes. <br /><br />Je suis très intéressé par le codage, après un peu plus de 20 ans de presence sur le net, j&#39ai continuer à apprendre le codage avec <a href="https://www.sololearn.com/">sololearn</a>. Je me suis ensuite inscrit au formations informatique à l&#39<a href="https://www.formation-ifp.com/">institut de formation professionnel</a> (Entretien &#38; Réparation D&#39ordinateur, Spécialiste Internet et Programmation JAVA).<br />Toussent terminer avec une note finale de plus de 80% ainsi j&#39ai aussi choisis de creer un site sans pour autant tout vous devoiler, car le net reste malgre tout un monde virtuel, et j&#39aime garder une petite part du mystere sur ma personalitée.<br /><br />Si vous appréciez mon contenu, pensez à soutenir ce que je fais.</p>';}
function siteConfig() {
   O('content').innerHTML='<h2><a onclick="siteConfig()">Paramètres du site web</a></h2><hr>'+
   '<h3><a onclick="paramScrollBar()">Scroll-Bar</a></h3>'+
   '<h3><a onclick="paramBackground()">Background</a></h3>'+
   '<h3><a onclick="paramNav()">Menu / Navigation</a></h3>'+
   '<h3><a onclick="paramMouse()">Pointer / Mouse / souris</a></h3>';
}
function paramScrollBar() {
   O('content').innerHTML='<h2><a onclick="siteConfig()">Paramètres du site web</a></h2><hr>'+
   '<h3><a onclick="paramScrollBar()">Scroll-Bar</a></h3>'+
   '<li id="contentP">Couleur des scroll-bar</li>'+
   '<li id="contentP">Largeur des scroll-bar</li>'+
   '<br>'+
   '<h3><a onclick="paramBackground()">Background</a></h3>'+
   '<h3><a onclick="paramNav()">Menu / Navigation</a></h3>'+
   '<h3><a onclick="paramMouse()">Pointer / Mouse / souris</a></h3>';
}
function paramBackground() {
   O('content').innerHTML='<h2><a onclick="siteConfig()">Paramètres du site web</a></h2><hr>'+
   '<h3><a onclick="paramScrollBar()">Scroll-Bar</a></h3>'+
   '<h3><a onclick="paramBackground()">Background</a></h3>'+
   '<li id="contentP">Couleur d.arriere plan</li>'+
   '<li id="contentP">Couleur du texte<br></li>'+
   '<br>'+
   '<h3><a onclick="paramNav()">Menu / Navigation</a></h3>'+
   '<h3><a onclick="paramMouse()">Pointer / Mouse / souris</a></h3>';
}
function paramNav() {
   O('content').innerHTML='<h2><a onclick="siteConfig()">Paramètres du site web</a></h2><hr>'+
   '<h3><a onclick="paramScrollBar()">Scroll-Bar</a></h3>'+
   '<h3><a onclick="paramBackground()">Background</a></h3>'+
   '<h3><a onclick="paramNav()">Menu / Navigation</a></h3>'+
   '<li id="contentP">Couleur d.arriere plan</li>'+
   '<li id="contentP">Couleur du texte<br></li>'+
   '<br>'+
   '<h3><a onclick="paramMouse()">Pointer / Mouse / souris</a></h3>';
}
function paramMouse() {
      const coordsDisplay = document.getElementById('coords');
   window.addEventListener('mousemove', (event) => {
            // 3. Extract X and Y coordinates
            const x = event.clientX;
            const y = event.clientY;

            // 4. Update the text on the screen
            coordsDisplay.textContent = `X: ${x}px, Y: ${y}px`;
        });
   O('content').innerHTML='<h2><a onclick="siteConfig()">Paramètres du site web</a></h2><hr>'+
   '<h3><a onclick="paramScrollBar()">Scroll-Bar</a></h3>'+
   '<h3><a onclick="paramBackground()">Background</a></h3>'+
   '<h3><a onclick="paramNav()">Menu / Navigation</a></h3>'+
   '<h3><a onclick="paramMouse()">Pointer / Mouse / souris</a></h3>'+
   '<li id="contentP">coordsDisplay.textContent = `X: ${x}px, Y: ${y}px`;</li>';
}
//
function article() {O('content').innerHTML='<h2>Naviguer en sécurité</h2>';}
//
function imgGallery() {
O('content').innerHTML='';
const imgGallery=document.createElement("OBJECT");
imgGallery.setAttribute("data", "gallery.html");
imgGallery.setAttribute("width", "800px"); // 875px
imgGallery.setAttribute("height", "335px");
imgGallery.setAttribute("id", "imgGallery");
O('content').appendChild(imgGallery);
}
//
function domStyles() {
O('content').innerHTML='';
const htDomStyle=document.createElement("OBJECT");
htDomStyle.setAttribute("data", "htmlDomStyle.html");
htDomStyle.setAttribute("width", "800px");
htDomStyle.setAttribute("height", "335px");
htDomStyle.setAttribute("class", "htDomStyle");
O('content').appendChild(htDomStyle);
}
//
function htmlDOMnode() {
O('content').innerHTML='';
const htDom=document.createElement("OBJECT");
htDom.setAttribute("data", "htmlDOM.html");
htDom.setAttribute("width", "800px");
htDom.setAttribute("height", "335px");
htDom.setAttribute("class", "htDom");
O('content').appendChild(htDom);
}
//
function peridotColorPattern() {
O('content').innerHTML='';
const peridotCpattern=document.createElement("OBJECT");
peridotCpattern.setAttribute("data", "peridotColorPattern.htm");
peridotCpattern.setAttribute("width", "800px");
peridotCpattern.setAttribute("height", "335px");
peridotCpattern.setAttribute("class", "peridotCpattern");
O('content').appendChild(peridotCpattern);
}
function htmlCompiler() {
O('content').innerHTML='';
const htmlCompil=document.createElement("OBJECT");
htmlCompil.setAttribute("data", "compiler/htmlCompiler.htm");
htmlCompil.setAttribute("width", "800px");
htmlCompil.setAttribute("height", "335px");
htmlCompil.setAttribute("class", "htmlCompil");
O('content').appendChild(htmlCompil);
}
//
function binCompiler() {
O('content').innerHTML='';
const binCompil=document.createElement("OBJECT");
binCompil.setAttribute("data", "compiler/binaryCompiler.htm");
binCompil.setAttribute("width", "800px");
binCompil.setAttribute("height", "335px");
binCompil.setAttribute("class", "binCompil");
O('content').appendChild(binCompil);
}
//
function cssSnips() {
O('content').innerHTML='';
const cssSnip=document.createElement("OBJECT");
cssSnip.setAttribute("data", "cssSnip.htm");
cssSnip.setAttribute("width", "800px");
cssSnip.setAttribute("height", "335px");
cssSnip.setAttribute("class", "cssSnip");
O('content').appendChild(cssSnip);
}
//
function jQuerySnips() {
O('content').innerHTML='';
const jQuerySnip=document.createElement("OBJECT");
jQuerySnip.setAttribute("data", "jQuerySnip.htm");
jQuerySnip.setAttribute("width", "800px");
jQuerySnip.setAttribute("height", "335px");
jQuerySnip.setAttribute("class", "jQuerySnip");
O('content').appendChild(jQuerySnip);
}
//
function skills() {O('content').innerHTML='<h2>Mes Compétences</h2><hr><center><ul><li>JAVA</li><li>PHP</li><li>MySQL</li><li>JavaScript</li><li>jQuery</li><li>CSS3</li><li>HTMl5</li></ul></center>'; }
const htmlCodes='<h3>HTML (.htm - .html)</h3> <ul id="colorPick">Color Picker<br/> <input type="color" id="colorpicker" value="#000000" style="margin-left:0px;" /> <li id="contentLi"><a class="domAlink" onclick="passwordGenerator(random_number)">Générateur de mot de passe</a></li> <li id="contentLi"><a class="domAlink" onclick="winNav()">Navigator Properties</a></li> <li id="contentLi"><a class="domAlink" onclick="cssSnips()">CSS html DOM Snippets</a></li> <li id="contentLi"><a class="domAlink" onclick="domStyles()">JS html DOM Styles</a></li> <li id="contentLi"><a class="domAlink" onclick="htmlDOMnode()">JS HTML DOM Interface</a></li> <li id="contentLi"><a onclick="peridotColorPattern()">Peridot color pattern</a></li> <li id="contentLi"><a class="domAlink" onclick="htmlCompiler()">Compilateur HTML</a></li> <li id="contentLi"><a class="domAlink" onclick="binCompiler()">Compilateur Binaire</a></li> <li id="contentLi"><a class="subTcodes">Window Object</a></li> <li id="contentLi"><a>HTML Events</a></li> <li id="contentLi"><a href="storage.htm"><i>web Storage</i></a></li> <li id="contentLi"><a href="RGBAcolors.htm"><i>RGBA Colors</i></a></li> <li id="contentLi"><a href="skydiveLoggerApp">Skydive Logger APP Data To HTML Table</a></li> </ul> <br/>';
const cssCodes='<h3>CSS (.css)</h3><ul><li id="contentLi"><a>CSS Needles Library</a></li></ul><br/>';
const jsCodes='<h3>JavaScript (.js)</h3><ul><li id="contentLi"><a>AJAX</a></li><li id="contentLi"><a>Time</a></li><li id="contentLi"><a>Gestion d&#39opérations</a></li><li id="contentLi"><a>Générateur de Table HTML</a></li><li id="contentLi"><a>OSC</a></li><li id="contentLi"><a>needles</a></li><li id="contentLi"><a href="#">module.js</a></li></ul> <br/>';
const jQueryCodes='<h3>jQuery (.js)</h3> <ul> <li id="contentLi"><a>Gestion des mouvements et des boutons de la souris</a></li> <li id="contentLi"><a class="domAlink" onclick="jQuerySnips()">jQuery Snippets</a></li> </ul> <br/>';
const phpCodes='<h3>PHP (.php)</h3><ul><li id="contentLi"><a>Gestion de fichiers</a></li><li id="contentLi"><a>Appels Système</a></li><li id="contentLi"><a>Gestion de Formulaire</a></li><li id="contentLi"><a>Gestion de cookies</a></li><li id="contentLi"><a>Gestion d&#39utilisateurs</a></li><li id="contentLi"><a>Gestion de Session</a></li><li id="contentLi"><a>Gestion d&#39erreurs</a></li></ul><br/>';
const javaCodes= ' <h3>JAVA (.java)</h3> <ul> <li id="contentLi"><a>Coffee Machine</a></li> <li id="contentLi"><a>Gestion de fichiers</a></li> <li id="contentLi"><a>Gestion de bulletin de notes</a></li> <li id="contentLi"><a>Gestion de comptes bancaire</a></li><li id="contentLi"><a>Sapin en Swing</a></li></ul><br/> ';
const shellScriptCodes='<h3>Shell Scripting Language (.bat - .cmd - .exe)</h3><ul><li id="contentLi"><a>file Sorting</a></li> <li id="contentLi"><a>List Files In Folder</a></li> <li id="contentLi"><a>Windows error Fixer</a></li> <li id="contentLi"><a>Clone File Checker</a></li> <li id="contentLi"><a>clear Cache</a></li> </ul><br/>';
const mslCodes='<h3>mSL (.ini)</h3><ul><li id="contentLi"><a>MCBrady</a></li></ul>';
function codes() {O('content').innerHTML='<h2>Codes</h2><hr><p id="contentP">Jusqu&#39à présent, j&#39ai écrit quelques codes :'+
/* '<a onClick="ctxMenutmp()"> (ctxMenu)</a></p>'+ */
htmlCodes+cssCodes+jsCodes+jQueryCodes+phpCodes+javaCodes+shellScriptCodes+mslCodes; }
/*
function ctxMenutmp(){
     let menu = document.createElement("div")
//
     let menuClose = document.createElement("button")
  menuClose.id="ctxCloseBtn"
  menuClose.style=""
//
     menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`;
  menuClose.onClick = () => {ctxmenu.outerHTML = ''; menu.style='display:hidden;';};
  mTitle="<center><b>Menu</b></center><hr>";
  budgetTracker="<p onclick='window.open(`Budget/index.html`, `_self`)'>Budget</p>";
  fetes="<p onclick='window.open(`holiday/index.html`, `_self`)'>holiday's</p>";
  mcbrady="<p onclick='window.open(`mcbrady/index.html`, `_self`)'>#MCbrady mIRC Channel</p>";
  esoGuild="<p onclick='window.open(`eso/index.html`, `_self`)'>Elder Scroll Online Guild</p>";
  ufc="<p onclick='window.open(`ufc/index.htm`, `_self`)'>UFC</p>";
  twitchTheater=" <p onclick='window.open(`TwitchTheater/index.html`, `_blank`, `noopener,noreferrer`)'>twitchTheater.tv</p> ";
  lastModif="<center><p>This page was last updated on "+document.lastModified;+"</p></center>";
  hardRefresh="<center><p>CTRL + F5 (<b>Hard Refresh</b>)</p></center>";
  menu.innerHTML = mTitle+budgetTracker+fetes+mcbrady+esoGuild+ufc+twitchTheater+"<hr>"+hardRefresh+lastModif;
  document.body.appendChild(menu);
}
*/
function Products() {
   O('content').innerHTML="<h2>Produits</h2><center> <img src='img/maintenance.jpg'> </center>";
 }
function HTML() {
   O('content').innerHTML="<h2>HTML</h2><center> <img src='img/maintenance.jpg'> </center>";
 }
function CSS() {
   O('content').innerHTML="<h2>CSS</h2><center> <img src='img/maintenance.jpg'> </center>";
 }
function JAVASCRIPT() {
   O('content').innerHTML="<h2>JAVASCRIPT</h2><center> <img src='img/maintenance.jpg'> </center>";
 }
function NodeJS() {
   O('content').innerHTML="<h2>NodeJS</h2><center> <img src='img/maintenance.jpg'> </center>";
 }
function PHP() {
   O('content').innerHTML="<h2>PHP</h2><center> <img src='img/maintenance.jpg'> </center>";
 }
function SQL() {
   O('content').innerHTML="<h2>SQL</h2><center> <img src='img/maintenance.jpg'> </center>";
 }
function JAVA() {
   O('content').innerHTML="<h2>JAVA</h2><center> <img src='img/maintenance.jpg'> </center>";
 }

//
function winNav(){
    var caracteristiquesNavigateur = "";
    caracteristiquesNavigateur = "<h2>navigator Properties</h2><br/>";
    caracteristiquesNavigateur += "<p id='contentP'>Code du navigateur : "
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
    + navigator.systemLanguage + "<br></p>";
    O('content').innerHTML=caracteristiquesNavigateur;
}
//
function members() {
  O('content').innerHTML="<h2>Tableau de bord</h2>"+
  "<center> <h3><a href='https://go.microsoft.com/fwlink/?LinkID=62293&amp;IIS70Error=404,0,0x80070002,19045'>inscription / connexion</a> </h3></center>";
let storedText;
fetch('https://ipinfo.io/json?callback') .then(function(response) {
  response.text().then(function(text) {
    let storedText = text;
    let str=storedText.toString();
    let dt=str.slice(1, -48);
    O('content').innerHTML+="<br><p id='contentP'>"+dt+"</p>";
  });
});
O('content').innerHTML+=

'<div style="border:2px solid black;padding:8px;float:right;margin-right:5vw;";>'+
'<center><h3><u>webMaster</u></h3></center><br><hr>'+
'<a href="https://www.npmjs.com/package/sql.js">SQL.js dataBase</a><br>'+
'<a href="storage.htm">github Storage</a><br>'+
'<a href="http://127.0.0.1:80/">IIS localHost</a><br> </div>'+

'<p id="contentP">cookiesEnabled'+navigator.cookieEnabled+"<br>"+
'navigator-appName'+navigator.appName+"<br>"+
'navigator-appCodeName'+navigator.appCodeName+"<br>"+
'navigator-product'+navigator.product+"<br>"+
'navigator-appVersion'+navigator.appVersion+"<br>"+
'navigator-userAgent'+navigator.userAgent+"<br>"+
'navigator-platform'+navigator.platform+"<br>"+
'navigator-language'+navigator.language+"<br>"+
'navigator-onLine'+navigator.onLine+"<br>"+
'navigator-javaEnabled()'+navigator.javaEnabled()+"<br></p>";
//
setTimeout(function(){
  let text;
  let uFname=document.getElementsByTagName('h2')[0];
  let uName=sessionStorage.getItem('uFname');
//if (uName!=null || uName!=""){uFname.innerHTML=uName;}
//if (sessionStorage.uFname){uFname.innerHTML=sessionStorage.uFname;}
  let person = prompt("S'il vous plaît entrez votre nom:", "Harry Potter");
  if (person == null || person == "") {text = "Cancelled prompt.";}
  else if(person == "marc") {window.open("https://marccormier.github.io/storage.htm");}
   else {text = "Bonjour "+person+"!";}
  uFname.innerHTML = text;
  sessionStorage.setItem('uFname', text);
}, 1000); //Time before execution
//
bientot();
}
function bientot() {
  out = "Section en construction."+"\n";
  out += " \n";
  out += "Cliquez sur OK pour Continuer.\n\n";
  alert(out);
  return true;
}
//
let introService="<center><h2>Services</h2>"+
"<a href='https://www.teamviewer.com/en/download/windows/'> <img src='img/logo/teamViewer.png' class='social-icon'> </a>"+
"<p><b><u>190 557 546</u></b></p>"+
"<input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='tarif()' value='Tarif' /><input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='zone()' value='Zone de service' /></center><hr>";
function services() {O('content').innerHTML=
introService+
"<h3><a style='cursor:pointer;' onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a style='cursor:pointer;' onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>"+
"<br><hr><br><center><p id='lastModif'></p> </center> "; 
document.getElementById('lastModif').innerHTML="<i>This page was last updated on </i>"+document.lastModified;}
function reparation() {O('content').innerHTML=
introService+
"<h3>ENTRETIEN & RÉPARATION D'ORDINATEUR</h3>"+
"<li id='contentLi'>Diagnostique des problèmes matériel ou logiciel</li>"+
"<li id='contentLi'>Récupération de mots de passe</li>"+
"<li id='contentLi'>Récupération et sauvegarde de données</li>"+
"<li id='contentLi'>Nettoyage à l'air de vos équipements électroniques et ordinateurs</li>"+
"<li id='contentLi'>Remplacement de disque dur</li>"+
"<li id='contentLi'>Installation et configuration d’imprimante</li>"+
"<li id='contentLi'>Élimination de virus</li>"+
"<li id='contentLi'>nettoyage d’ordinateur Formatage</li>"+
"<li id='contentLi'>installation de Windows</li>"+
"<br>"+
"<h3><a style='cursor:pointer;' onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a style='cursor:pointer;' onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>";
}
function reseau() {O('content').innerHTML=
introService+
"<h3><a style='cursor:pointer;' onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3>MAINTENANCE & DÉPANNAGE RÉSEAUX</h3>"+
"<li id='contentLi'>Configuration de réseau sans-fil</li>"+
"<li id='contentLi'>Câblages</li>"+
"<li id='contentLi'>Codage des données</li>"+
"<li id='contentLi'>topologie</li>"+
"<li id='contentLi'>protocoles</li>"+
"<li id='contentLi'>adressage</li>"+
"<br>"+
"<h3><a style='cursor:pointer;' style='cursor:pointer;' onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>";
}
function graph() {O('content').innerHTML=
introService+
"<h3><a style='cursor:pointer;' onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3>CONCEPTION GRAPHIQUE & WEBDESIGN</h3>"+
"<li id='contentLi'>Logos</li>"+
"<li id='contentLi'>templates Web</li>"+
"<li id='contentLi'>plaquettes publicitaires</li>"+
"<li id='contentLi'>cartes de visite</li>"+
"<li id='contentLi'>newsletters...</li>"+
"<br>"+
"<h3><a style='cursor:pointer;' onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>";
}
function integ() {O('content').innerHTML=
introService+
"<h3><a style='cursor:pointer;' onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a style='cursor:pointer;' onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3>INTÉGRATION (X)HTML / CSS</h3>"+
"<li id='contentP'>Codage à la main respectueux des standards du Web</li>"+
"<br>"+
"<h3><a style='cursor:pointer;' onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>";
}
function proWeb() {O('content').innerHTML=
introService+
"<h3><a style='cursor:pointer;' onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a style='cursor:pointer;' onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3>GESTION DE PROJETS WEB</h3>"+
"<li id='contentLi'>Site vitrine</li>"+
"<li id='contentLi'>corporate</li>"+
"<li id='contentLi'>évènementiel</li>"+
"<li id='contentLi'>e-commerce</li>"+
"<li id='contentLi'>intranet</li>"+
"<li id='contentLi'>application mobile</li>"+
"<br>"+
"<h3><a style='cursor:pointer;' onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>";
}
function valRef() {O('content').innerHTML=
introService+
"<h3><a style='cursor:pointer;' onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a style='cursor:pointer;' onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</h3>"+
"<li id='contentP'>Accessibilité & ergonomie des pages web</li>"+
"<br>"+
"<h3><a style='cursor:pointer;' onclick='multiFrame()'>CONCEPTION MULTI-PLATEFORMES</a></h3><br/>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>";
}
function multiFrame() {O('content').innerHTML=
introService+
"<h3><a style='cursor:pointer;' onclick='reparation()'>ENTRETIEN & RÉPARATION D'ORDINATEUR</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='reseau()'>MAINTENANCE & DÉPANNAGE RÉSEAUX</a></h3><br>"+
"<h3><a style='cursor:pointer;' onclick='graph()'>CONCEPTION GRAPHIQUE & WEBDESIGN</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='integ()'>INTÉGRATION (X)HTML / CSS</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='proWeb()'>GESTION DE PROJETS WEB</a></h3><br/>"+
"<h3><a style='cursor:pointer;' onclick='valRef()'>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</a></h3><br/>"+
"<h3>CONCEPTION MULTI-PLATEFORMES</h3>"+
"<li id='contentP'>Compatible tous supports, tablette & application mobile</li>"+
"<br>"+
"<h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4><br>"+
"<h4>DYNAMISE DES PAGES PAR JAVASCRIPT</h4><br>"+
"<h4>FORMATION PERSONALISÉE</h4>"+
"<li id='contentP'>Débutant - Intermédiaire - Expert</li><br><br>"+
"<p id='contentP'>Le service informatique à domicile est disponible pour les particuliers, les travailleurs autonomes et les petites entreprises.<br/>"+
"Service à domicile sur rendez-vous.</p><br/><br>";
}
function tarif() {O('content').innerHTML="<h2>Tarif</h2>"+ "<p id='contentP' Estimation à partir de 20$ * <br/><br/>"+ "Tarif à partir de 45$ de l'heure <br/><br/>"+ "*** Service commercial: a partir de 75$ de l'heure *** <br/><br/>"+ "Service d'assistance en ligne pour 15$ jusqu'à 30 minutes!<br/><br/>"+ "Service rapide à partir de $85<br/>"+ "** prix minimum pour un déplacement: 1 heure selon tarif.<br/>"+ "* Minimum 1 heure  *<br/><br/>"+ "* peut varier en fonction des certifications et/ou compétences du technicien ou administrateur reseaux.<br/><br/>"+ "** prix sujet à changement sans préavis. pour plus de détails visitez notre site web régulièrement.<br/><br/>"+ "<input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='zone()' value='Zone de service' /></p><br/><br/>"; }
function zone() {O('content').innerHTML="<h2>Zone de service</h2>"+ 
"<li id='contentP' style='text-decoration:line-through;'>Rive-Nord</li>"+ 
"<li id='contentP'>Montréal</li>"+ 
"<li id='contentP' style='text-decoration:line-through;'>Rive-Sud</li>"+ 
"<p id='contentP'><input style='margin:7px;padding:3px;font-weight:bold;' type='button' onclick='tarif()' value='Tarif' /></p>"; }