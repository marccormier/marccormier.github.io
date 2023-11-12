function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
content=O('content');
function home() {content.innerHTML='<center><img id="maintenance" style="max-width:50vw;height:auto;" src="img/maintenance.jpg"> <ul> <li><a href="mcbrady">#MCBrady</a></li> <li><a href="skydiveLoggerApp">Skydive Logger APP Data To HTML Table</a></li> <li><a href="https://tinyurl.com/esoGuildWebpage">ESO Guild</a></li> </ul> </center>'; }
function about() {content.innerHTML='<h2>Information Personnel</h2><hr><p>Mon nom est Marc et j&#39ai 38 ans.  Je vie dans une grande ville de plus ou moins 423 000 habitants, située au Québec, Canada. <br />Magnifique region, que j&#39affectionne tout particulierement. J&#39estime que l&#39age, la couleur, la religion, l&#39apparence physique, tout ce qui nous distingue (et nous sépare souvent aussi) au quotidien n&#39a pas lieu d&#39être sur le net. <br/>Je documente tout ce que j&#39apprends et aide les gens à commencer dans le codage. <br />Mon site n&#39a pas de publicités, de sponsors ou de &#39bullshit&#39. <br /><br />Je n&#39aime pas parler de moi, mais quand je visite un site et que je vois une rubrique consacree au webmaster, je clique sur le lien, et donc Merci de sacrifie de votre precieux temps afin de visite mon site, je souhaite exprimer ma gratitude a mes visiteurs.<br /><br />J&#39espere que votre consultation répondra a vos attentes. <br /><br />Je suis très intéressé par le codage, après un peu plus de 20 ans de presence sur le net, j&#39ai continuer à apprendre le codage avec <a href="https://www.sololearn.com/">sololearn</a>. Je me suis ensuite inscrit au formations informatique à l&#39<a href="https://www.formation-ifp.com/">institut de formation professionnel</a> (Entretien &#38; Réparation D&#39ordinateur, Spécialiste Internet et Programmation JAVA).<br />Toussent terminer avec une note finale de plus de 80% ainsi j&#39ai aussi choisis de creer un site sans pour autant tout vous devoiler, car le net reste malgre tout un monde virtuel, et j&#39aime garder une petite part du mystere sur ma personalitée.<br /><br />Si vous appréciez mon contenu, pensez à soutenir ce que je fais.</p>'; }
function article() {content.innerHTML='<h2>Fix time.h on 32 bit machines to work past the year 2038 bug</h2><hr><br/><p>time.h POSIX implementation can<br/>solves the year 2038 bug on systems<br/>where time_t is only 32 bits.<br/>It is implemented in bog-standard ANSI C.</p><br/>'; }
function imgGallery() {
content.innerHTML='';
const imgGallery=document.createElement("OBJECT");
imgGallery.setAttribute("data", "gallery.html");
imgGallery.setAttribute("width", "875px");
imgGallery.setAttribute("height", "335px");
imgGallery.setAttribute("id", "imgGallery");
content.appendChild(imgGallery);
}
//
function domStyles() {
content.innerHTML='';
const htDomStyle=document.createElement("OBJECT");
htDomStyle.setAttribute("data", "htmlDomStyle.html");
htDomStyle.setAttribute("width", "875px");
htDomStyle.setAttribute("height", "335px");
content.appendChild(htDomStyle);
}
//
function htmlDOMnode() {
content.innerHTML='';
const htDom=document.createElement("OBJECT");
htDom.setAttribute("data", "htmlDOM.html");
htDom.setAttribute("width", "875px");
htDom.setAttribute("height", "335px");
content.appendChild(htDom);
}
//
function peridotColorPattern() {
content.innerHTML='';
const peridotCpattern=document.createElement("OBJECT");
peridotCpattern.setAttribute("data", "peridotColorPattern.htm");
peridotCpattern.setAttribute("width", "875px");
peridotCpattern.setAttribute("height", "335px");
content.appendChild(peridotCpattern);
}
function htmlCompiler() {
content.innerHTML='';
const htmlCompil=document.createElement("OBJECT");
htmlCompil.setAttribute("data", "compiler/htmlCompiler.htm");
htmlCompil.setAttribute("width", "875px");
htmlCompil.setAttribute("height", "335px");
content.appendChild(htmlCompil);
}
//
function binCompiler() {
content.innerHTML='';
const binCompil=document.createElement("OBJECT");
binCompil.setAttribute("data", "compiler/binaryCompiler.htm");
binCompil.setAttribute("width", "875px");
binCompil.setAttribute("height", "335px");
content.appendChild(binCompil);
}
//
function cssSnips() {
content.innerHTML='';
const cssSnip=document.createElement("OBJECT");
cssSnip.setAttribute("data", "cssSnip.htm");
cssSnip.setAttribute("width", "875px");
cssSnip.setAttribute("height", "335px");
content.appendChild(cssSnip);
}
//
function jQuerySnips() {
content.innerHTML='';
const jQuerySnip=document.createElement("OBJECT");
jQuerySnip.setAttribute("data", "jQuerySnip.htm");
jQuerySnip.setAttribute("width", "875px");
jQuerySnip.setAttribute("height", "335px");
content.appendChild(jQuerySnip);
}
//
function skills() {content.innerHTML='<h2>Mes Compétences</h2><hr><center><ul><li>HTMl</li><li>CSS</li><li>JavaScript</li><li>PHP</li><li>JAVA</li></ul></center>'; }
const htmlCodes='<h3>HTML</h3> <ul>Color Picker<br/><input type="color" id="colorpicker" value="#000000" style="margin-left:0px;" /> <li><a class="domAlink" onclick="passwordGenerator(random_number)">Générateur de mot de passe</a></li> <li><a class="domAlink" onclick="cssSnips()">CSS html DOM Snippets</a></li> <li><a class="domAlink" onclick="htmlCompiler()">Compilateur HTML</a></li> <li><a class="domAlink" onclick="binCompiler()">Compilateur Binaire</a></li> <li><a onclick="peridotColorPattern()">Peridot color pattern</a></li> <li><a class="domAlink" onclick="htmlDOMnode()">JS HTML DOM Node Interface</a></li> <li><a class="subTcodes">Window Object</a></li> <li><a class="domAlink" onclick="winNav()">Navigator</a></li> <li><a class="domAlink" onclick="domStyles()">DOM Styles</a></li> <li><a>HTML Events</a></li> </ul> <br/>';
const cssCodes='<h3>CSS</h3><ul><li><a>CSS Needles Library</a></li></ul><br/>';
const jsCodes='<h3>JavaScript</h3><ul><li><a>AJAX</a></li><li><a>Time</a></li><li><a>Gestion d&#39opérations</a></li><li><a>Générateur de Table HTML</a></li><li><a>OSC</a></li><li><a>needles</a></li></ul> <br/>';
const jQueryCodes='<h3>jQuery</h3> <ul> <li><a>Gestion des mouvements et des boutons de la souris</a></li> <li><a class="domAlink" onclick="jQuerySnips()">jQuery Snippets</a></li> </ul> <br/>';
const phpCodes='<h3>PHP</h3><ul><li><a>Gestion de fichiers</a></li><li><a>Appels Système</a></li><li><a>Gestion de Formulaire</a></li><li><a>Gestion de cookies</a></li><li><a>Gestion d&#39utilisateurs</a></li><li><a>Gestion de Session</a></li><li><a>Gestion d&#39erreurs</a></li></ul><br/>';
const javaCodes='<h3>JAVA</h3><ul><li><a>Coffee Machine</a></li><li><a>Gestion de fichiers</a></li><li><a>Gestion de bulletin de notes</a></li><li><a>Gestion de comptes bancaire</a></li><li><a>Sapin en Swing</a></li></ul><br/>';
const shellScriptCodes='<h3>Shell Scripting Language</h3><ul><li><a>file Sorting</a></li> <li><a>List Files In Folder</a></li> <li><a>Windows error Fixer</a></li> <li><a>Clone File Checker</a></li> <li><a>clear Cache</a></li> </ul><br/>';
const mslCodes='<h3>mSL</h3><ul><li><a>MCBrady</a></li></ul>';
function codes() {content.innerHTML='<h2>Codes</h2><hr><p>Jusqu&#39à présent, j&#39ai écrit quelques codes :</p>'+ htmlCodes+cssCodes+jsCodes+jQueryCodes+phpCodes+javaCodes+shellScriptCodes+mslCodes; }
//
function winNav(){
    var caracteristiquesNavigateur = "";
    caracteristiquesNavigateur = "<h2>window.navigator;</h2><br/>";
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
//    + coor + "<br>";
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
let topBtn = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  topBtn.style.display = "block";
  } else {
  topBtn.style.display = "none";
  }
}
function topFunction() {document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }
//
setInterval(clock, 1);
function clock() {
const d = new Date();
let time = d.getTime();
let sec = d.getSeconds();
let min = d.getMinutes();
let millisec = d.getMilliseconds();
let hour = d.getHours();
let fYear = d.getFullYear();
let date = d.getDate();
let day;

/*
const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const d = new Date();
let day = weekday[d.getDay()];
*/

switch (d.getDay()) {
  case 0:
  day = "Dimanche";
  break;
  case 1:
  day = "Lundi";
  break;
  case 2:
  day = "Mardi";
  break;
  case 3:
  day = "Mercredi";
  break;
  case 4:
  day = "Jeudi";
  break;
  case 5:
  day = "Vendredi";
  break;
  case  6:
  day = "Samedi";
}

let month;
switch (d.getMonth()) {
  case 0:
  month = "Janvier";
  break;
  case 1:
  month = "Février";
  break;
  case 2:
  month = "Mars";
  break;
  case 3:
  month = "Avril";
  break;
  case 4:
  month = "Mai";
  break;
  case 5:
  month = "Juin";
  break;
  case  6:
  month = "Juillet";
  break;
  case 7:
  month = "Août";
  break;
  case  8:
  month = "Septembre";
  break;
  case  9:
  month = "Octobre";
  break;
  case  10:
  month = "Novembre";
  break;
  case  11:
  month = "Décembre";
}
hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;
month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;
let res=day+", "+date+"&nbsp"+month+"&nbsp"+fYear+"<br/>"+hour+":"+min+":"+sec+"."+millisec;
document.getElementById("time").innerHTML=res;
}
document.getElementById('lastModif').innerHTML = document.lastModified;
var year = new Date().getFullYear();
document.getElementById('copy').innerHTML = "&#169 "+year+" <a href='https://marccormier.github.io/' style='text-decoration:none;color:black;'>Marc Cormier</a> ";
