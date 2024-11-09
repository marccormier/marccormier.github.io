function crtPCD() {
var div = document.createElement('div');
div.setAttribute('id', 'pCustomDesign');
div.setAttribute('style', 'display:none;');

var title=document.createElement('h3');
title.innerHTML='Page Custom Design';
div.appendChild(title);

var closeBtn=document.createElement('p');
closeBtn.innerHTML='X';
closeBtn.setAttribute('style', 'font-size:2em;font-weight:bold;position:absolute;top:-10px;right:0px;color:black;');
closeBtn.setAttribute('onclick', 'hidePageCustomDesign()');
div.appendChild(closeBtn);

var select = document.createElement("select");
select.id = "select";

var option1 = document.createElement("option");
option1.value = "bgC";
option1.text = "BackGround Color";
select.appendChild(option1);

var option2 = document.createElement("option");
option2.value = "txtC";
option2.text = "Text Color";
select.appendChild(option2);

div.appendChild(select);

var input=document.createElement('input');
input.setAttribute('type', 'color');
input.setAttribute('id', 'color');
div.appendChild(input);


document.body.appendChild(div);
}
document.getElementById('select').addEventListener('change', function() {x=this.value; });
document.getElementById('color').addEventListener('change', function() {

  if (x==='bgC') {document.body.style.backgroundColor=this.value;}
  else if (x==='txtC') {document.body.style.color=this.value;} });

function showPageCustomDesign() {
  crtPCD();
  document.getElementById('pCustomDesign').style='display:block;border:1px solid black;max-width:100vw;padding:25px;margin:auto;background-color:coral;color:white;box-sizing:border-box;position:absolute;top:15vh;left:40vw;';
}
function hidePageCustomDesign() {
  document.getElementById('pCustomDesign').style='display:none;';
}