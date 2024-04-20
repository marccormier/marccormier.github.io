oncontextmenu = (e) => {
  e.preventDefault()
  let menu = document.createElement("div")
  menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
  menu.onmouseleave = () => ctxmenu.outerHTML = ''
  mTitle="Menu<br><hr>";
  opt="<p onclick='alert(`Option`)'>Option</p>";
  webStorage="<p onclick='window.open(`storage.htm`, `_self`)'>Web Storage</p>";
  mcbrady="<p onclick='window.open(`mcbrady`, `_self`)'>#MCbrady IRC Channel</p>";
  esoGuild="<p onclick='window.open(`eso`, `_self`)'>ESO Guild</p>";
  olderVersion="<p onclick='window.open(`olderVersion/wix-2021-12-30-13h13m.htm`, `_self`)'>Ancienne Version.</p>";
  //extLinks="<p onclick='window.open(`extLinks.htm`, `_self`)'>Liens Externe</p>";
  //scopes="<p onclick='window.open(`scope.htm`, `_self`)'>Code Scopes</p>";
  //
  //codes="<p onclick='codes()'>Codes</p>";
  //alert="<p onclick='alert(`you click option alert`)'>alert</p>";
  menu.innerHTML = mTitle+opt+webStorage+mcbrady+esoGuild+extLinks+scopes+olderVersion;
  document.body.appendChild(menu);
}