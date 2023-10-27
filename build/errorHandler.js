onerror = errorHandler; 
function errorHandler(message, url, ligne) {
  out  = "Désolé, une erreur s'est produite.\n\n";
  out += "Erreur : " + message + "\n";
  out += "URL : "    + url     + "\n";
  out += "Ligne : "  + ligne   + "\n\n";
  out += "Cliquez sur OK pour continue.\n\n";
  alert(out);
  return true;
}