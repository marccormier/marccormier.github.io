setTimeout(function(){
  let text;
  let uFname=document.getElementsByTagName('h2')[0];
  let uName=sessionStorage.getItem('uFname');
//if (uName!=null || uName!=""){uFname.innerHTML=uName;}
//if (sessionStorage.uFname){uFname.innerHTML=sessionStorage.uFname;}
  let person = prompt("S'il vous plaît entrez votre nom:", "");
  if (person == null || person == "") {text = "Cancelled prompt.";}
   else {text = "Bonjour "+person+"!";}
  uFname.innerHTML = text;
  sessionStorage.setItem('uFname', text);
}, 1000); //Time before execution