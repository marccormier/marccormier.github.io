ctxMenu=document.createElement('style');
ctxMenu.innerHTML="#ctxmenu {position: fixed; background: ghostwhite; color: black; cursor: pointer; border: 1px black solid; padding:2px; } #ctxmenu > p {padding: 0 1rem; margin: 0 } #ctxmenu > p:hover {background: black; color: ghostwhite }";
document.head.appendChild(ctxMenu);
//
oncontextmenu = (e) => {
  e.preventDefault()
  let menu = document.createElement("div")
  menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`;
  menu.onmouseleave = () => ctxmenu.outerHTML = ''
  mTitle="<center><b>Menu</b></center><hr>";
  mcbrady="<p onclick='window.open(`mcbrady/index.htm`, `_self`)'>#MCbrady mIRC Channel (webPage)</p>";
  esoGuild="<p onclick='window.open(`eso/index.html`, `_self`)'>Elder Scroll Online Guild (webPage)</p>";
  ufc="<p onclick='window.open(`ufc/index.html`, `_self`)'>UFC (webPage)</p>";
  lastModif="<p>Site was last updated on: <span>"+document.lastModified;"+</span></p>";
  hardRefresh="<p>CTRL + F5 (<b>Hard Refresh</b>)</p>";
  menu.innerHTML = mTitle+mcbrady+esoGuild+ufc+"<hr>"+lastModif+hardRefresh;
  document.body.appendChild(menu);
}