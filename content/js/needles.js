const fruits = ["Banane", "Orange", "Mangue", "Pomme", "Poire", "Cerise", "Pêche", "Raisin", "Tomate"];
function genTable() {
ta=document.createElement("table");
const dFrag = document.createDocumentFragment();
for (let x in fruits) {
  const th = document.createElement('th');
  th.textContent = fruits[x];
  dFrag.appendChild(th);
  ta.appendChild(dFrag);
}
document.body.appendChild(ta);
}