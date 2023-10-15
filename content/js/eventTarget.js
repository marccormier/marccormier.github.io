/* Event Target tagName*/
//body onload 
function eventTarget(event) { 
  const element=event.target;
  document.getElementById("domB").innerHTML = "Triggered by " + element.tagName;
}