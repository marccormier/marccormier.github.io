ctxMenu=document.createElement('style');
ctxMenu.innerHTML="#ctxmenu {position: fixed; background: ghostwhite; color: black; cursor: pointer; border: 1px black solid; padding:2px; } #ctxmenu > p {padding: 0 1rem; margin: 0 } #ctxmenu > p:hover {background: black; color: ghostwhite }";
document.head.appendChild(ctxMenu);
//
const mediaQuery = window.matchMedia('(max-width: 768px)');
   // Viewport is 768px or smaller
function handleMediaQueryChange(e) {
  const elements = document.getElementById('ctxMenu');
  elements.forEach(element => element.remove());
}
mediaQuery.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
//
/*
function hardRefresh() {const url = new URL(window.location.href); url.searchParams.set('reload', Date.now()); window.location.href = url.toString();}
*/
oncontextmenu = (e) => {
  e.preventDefault()
  let menu = document.createElement("div")
  menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`;
  menu.onmouseleave = () => {ctxmenu.outerHTML = ''; menu.style='display:hidden;';};
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