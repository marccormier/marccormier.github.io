oncontextmenu = (e) => {
  e.preventDefault()
  let menu = document.createElement("div")
  menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
  menu.onmouseleave = () => ctxmenu.outerHTML = ''
  mTitle="Menu<br><hr>";
  opt0="<p onclick='alert(`Option`)'>Option</p>";
  opt1="<p onclick='alert(`you click option 1`)'>Option1</p>";
  menu.innerHTML = mTitle+opt0;
  document.body.appendChild(menu)
}