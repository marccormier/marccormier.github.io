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
  mTitle="<center><b>Menu</b></center><br><hr>";
  pilotCodeTool="<p onclick='window.open(`PilotTools`, `_self`)'>ParaGliding Pilot Coding Tool's</p>";
  opt="<p onclick='alert(`Option...`)'>Alert('Option...')</p>";
  webStorage="<p onclick='window.open(`storage.htm`, `_self`)'>Web Storage</p>";
  mcbrady="<p onclick='window.open(`mcbrady`, `_self`)'>#MCbrady IRC Channel</p>";
  esoGuild="<p onclick='window.open(`eso`, `_self`)'>ESO Guild</p>";
  budgetTracker="<p onclick='window.open(`Budget`, `_self`)'>Budget Tracker</p>";
  pCustomDesign="<p onclick='showPageCustomDesign();'>Custom Page Design</p>";
  olderVersion="<p onclick='window.open(`olderVersion/wix-2021-12-30-13h13m.htm`, `_self`)'>Ancienne Version.</p>";
  //extLinks="<p onclick='window.open(`extLinks.htm`, `_self`)'>Liens Externe</p>";
  //scopes="<p onclick='window.open(`scope.htm`, `_self`)'>Code Scopes</p>";
  //
  //codes="<p onclick='codes()'>Codes</p>";
  //alert="<p onclick='alert(`you click option alert`)'>alert</p>";
  menu.innerHTML = mTitle+pilotCodeTool+opt+pCustomDesign+mcbrady+esoGuild+budgetTracker;
  document.body.appendChild(menu);
}