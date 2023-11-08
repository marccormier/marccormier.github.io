var users = [];
function add()
{
fName=document.getElementById("fName").value;
lName=document.getElementById("lName").value;
eMail=document.getElementById("eMail").value;
uAge=document.getElementById("age").value;
tel=document.getElementById("tel").value;
uName=document.getElementById("uName").value;
uPw=document.getElementById("uPw").value;
uCpw=document.getElementById("uCpw").value;
//
if (uPw !== uCpw) {alert('Les mots de passe doivent etre identique !'); }
//
var newUser = 'User '+(users.length+1); 
users.push(newUser); 
var uuId=uuId(); 
function uuId() 
	{
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) 
		{
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); 
			return v.toString(16); 
		}); 
	} 
	info = {"uuId":[uuId], "Prenom":fName, "Nom":lName, "Courriel":eMail, "Age":uAge, "Telephone":tel, "Nom dUtilisateur":uName, "Mot de passe":uPw};
//	info = {"fName":fName, "lName":lName, "uuId":[uuId]};
	jSON = JSON.stringify(info); 
	localStorage.setItem(uuId, jSON);
//	console.log(users, newUser, jSON);
//   document.body.innerHTML='<br/><h1>'+newUser+'</h1>';
	connection.showModal();
	inscription.close();
}