if (typeof(Storage) !== "undefined") {
needles="doc=document; win=window; function $(id){return doc.getElementById(id)}; function $(name){document.getElementsByTagName(name)}; function $(name){document.getElementsByClassName(name)}; function O(i){return typeof i==\'object\' ? i : document.getElementById(i)}; function S(i){return O(i).style}; function C(i){return document.getElementsByClassname(i)};";
localStorage.setItem('needles', needles);
localStorage.setItem('admin', 111213);
localStorage.setItem('storageLength', localStorage.length);
const tdList = {"email":"cormiermac.mc85@gmail.com","fName":"Marc","lName":"CORMIER","name":"Marc CORMIER","uName":"master","uPword":" ","uuid":"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx","uTime":"","city":"Laval","country":"CA","hostname":"","ip":"","loc":"45.5606272,-73.6886784","org":"","postal":"H7G","region":"Quebec"};
const todoList = JSON.stringify(tdList);
localStorage.setItem("master",todoList);
    } else {
alert('web Storage not supported by your browser.');
}