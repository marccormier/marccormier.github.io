function nonVide(champ, messageAlerte)
{
	if (champ.value.length==0)
	{
		alert(messageAlerte);
		champ.focus();
		return false;
	}
	alert("name:"+doc.getId("nom").value);
	returntrue;
}
