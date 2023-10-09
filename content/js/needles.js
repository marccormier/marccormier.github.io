function ulList() {
const fruits = ["Banana", "Orange", "Mango"];
ul=document.createElement("ul");
const dFrag = document.createDocumentFragment();
for (let x in fruits) {
  const li = document.createElement('li');
  li.textContent = fruits[x];
  dFrag.appendChild(li);
  ul.appendChild(dFrag);
}
document.body.appendChild(ul);
}
