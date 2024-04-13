setTimeout(function(){
  let text;
  let person = prompt("S'il vous plaît entrez votre nom:", "");
  if (person == null || person == "") {text = "Cancelled prompt.";}
   else {text = "Bonjour "+person+"!";}
  document.getElementsByTagName("h2")[0].innerHTML = text;
}, 1000); //Time before execution