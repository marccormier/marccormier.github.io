let addUserBox=document.createElement('div');
addUserBox.setAttribute('style', 'width:210px;height:210px;border:3px solid black;border-radius:25px;box-shadow:1px 1px 0px 4px darkgrey;margin:auto;padding-top:15px;text-align:center;');

let fN=document.createElement('input');
fN.setAttribute('type', 'text');
fN.setAttribute('placeholder', 'Prenom');
fN.setAttribute('id', 'fN');
addUserBox.appendChild(fN);

let lN=document.createElement('input');
lN.setAttribute('type', 'text');
lN.setAttribute('placeholder', 'Nom de famille');
lN.setAttribute('id', 'lN');
addUserBox.appendChild(lN);

let mail=document.createElement('input');
mail.setAttribute('type', 'text');
mail.setAttribute('placeholder', 'courriel@mail.com');
mail.setAttribute('id', 'mail');
addUserBox.appendChild(mail);

let mp=document.createElement('input');
mp.setAttribute('type', 'text');
mp.setAttribute('placeholder', 'Mot de passe');
mp.setAttribute('id', 'mp');
addUserBox.appendChild(mp);

let age=document.createElement('input');
age.setAttribute('type', 'text');
age.setAttribute('placeholder', 'age');
age.setAttribute('id', 'age');
addUserBox.appendChild(age);

let eyeColor=document.createElement('input');
eyeColor.setAttribute('type', 'text');
eyeColor.setAttribute('placeholder', 'eyeColor');
eyeColor.setAttribute('id', 'eyeColor');
addUserBox.appendChild(eyeColor);

let nationality=document.createElement('input');
nationality.setAttribute('type', 'text');
nationality.setAttribute('placeholder', 'nationality');
nationality.setAttribute('id', 'nationality');
addUserBox.appendChild(nationality);

let userName=document.createElement('input');
userName.setAttribute('type', 'text');
userName.setAttribute('placeholder', 'Username');
userName.setAttribute('id', 'userName');
addUserBox.appendChild(userName);


let addBtn=document.createElement('input');
addBtn.setAttribute('type', 'button');
addBtn.value="S'inscrire";
addBtn.setAttribute('onclick', 'Users()');
addUserBox.appendChild(addBtn);

let connBtn=document.createElement('input');
connBtn.setAttribute('type', 'button');
connBtn.value="Se Connecter";
connBtn.setAttribute('onclick', 'Conn()');
addUserBox.appendChild(connBtn);

document.body.appendChild(addUserBox);
/**/
let connUserBox=document.createElement('div');
connUserBox.setAttribute('style', 'display:none;');

let connUserName=document.createElement('input');
connUserName.setAttribute('type', 'text');
connUserName.setAttribute('placeholder', 'Username');
connUserName.setAttribute('id', 'userName');
connUserBox.appendChild(connUserName);

let connMp=document.createElement('input');
connMp.setAttribute('type', 'text');
connMp.setAttribute('placeholder', 'Mot de passe');
connMp.setAttribute('id', 'mp');
connUserBox.appendChild(connMp);

let connUbtn=document.createElement('input');
connUbtn.setAttribute('type', 'button');
connUbtn.value="Connection";
connUbtn.setAttribute('onclick', 'Connect()');
connUserBox.appendChild(connUbtn);


document.body.appendChild(connUserBox);