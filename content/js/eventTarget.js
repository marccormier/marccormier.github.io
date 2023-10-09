function eventTarget(event) { 
  const element=event.target;
  document.getElementById("demB").innerHTML = "Triggered by " + element.tagName;
}