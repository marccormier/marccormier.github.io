ctxMenu=document.createElement('style');
ctxMenu.innerHTML="#ctxmenu {position: fixed; background: ghostwhite; color: black; cursor: pointer; border: 1px black solid; padding:2px; } #ctxmenu > p {padding: 0 1rem; margin: 0 } #ctxmenu > p:hover {background: black; color: ghostwhite }";
document.head.appendChild(ctxMenu);
//
oncontextmenu = (e) => {
  e.preventDefault()
  let menu = document.createElement("div")
  menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`;
  menu.onmouseleave = () => {ctxmenu.outerHTML = ''; menu.style='display:hidden;';};
  mTitle="<center><b>Menu</b></center><hr>";
  budgetTracker="<p onclick='window.open(`Budget/index.html`, `_self`)'>Budget</p>";
  mcbrady="<p onclick='window.open(`mcbrady/index.htm`, `_self`)'>#MCbrady mIRC Channel (webPage)</p>";
  esoGuild="<p onclick='window.open(`eso/index.html`, `_self`)'>Elder Scroll Online Guild (webPage)</p>";
  ufc="<p onclick='window.open(`ufc/index.htm`, `_self`)'>UFC (webPage)</p>";
  twitchTheater=" <p onclick='window.open(`TwitchTheater/index.html`, `_self`)'>twitchTheater.tv</p> ";
  jeux="";
  lastModif="<center><p>This page was last updated on "+document.lastModified;+"</p></center>";
  hardRefresh="<center><p>CTRL + F5 (<b>Hard Refresh</b>)</p></center>";
  menu.innerHTML = mTitle+budgetTracker+mcbrady+esoGuild+ufc+twitchTheater+"<hr>"+hardRefresh+lastModif;
  document.body.appendChild(menu);
}