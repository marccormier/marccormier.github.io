function validate() 
{
x=document.getElementById("vUname").value;
w=x.slice(0, 1).toUpperCase();
v=x.slice(1).toLowerCase();
y=document.getElementById("vUpw").value;
// localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : '';
//
	const alphaNumRegEx = /^[-0-9a-zA-Z]+$/;
	Object.keys(localStorage).forEach(function (key) {
		if (key.match(alphaNumRegEx)) {
			console.log(key); 
//
			document.body.innerHTML="<center><h1>Bonjour, "+w+v+"</h1></center><hr>";
		} 
	}); 
connection.close();
}
