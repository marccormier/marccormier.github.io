function lectureCookie(nomCookie) {
// body... 
if (document.cookie.length == 0) 
{
	return null; 
} 
else 
{
	var tabElements = document.cookie.split(";");
	var positionEgal=tabElement[0].innerOf("=", 0);
	var nomElement=tabElements[0].substring(0, positionEgal);
	var valeurElement=tabElements[0].substring(positionEgal+1); 
	if(nomElement==nomCookie) {return unescape(valeurElement); } return null; 
} 
} 
if (lectureCookie("monCookie")==null) {document.write("Le cookie monCookie n'a pas été trouvé"); } 
else {document.write("Le cookie monCookie a pour valeur : "+lectureCookie("monCookie")); }