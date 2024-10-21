function jsonSkydive() {
let logbook = document.getElementById('logJson').value;
//let logbook = document.getElementById('outputJsonSkydive').value;
data = JSON.parse(logbook);
      var table = document.createElement("table"), row, cellA, cellB;
      document.getElementById("demo").appendChild(table);
      for (let key in data) {
        row = table.insertRow();
        cellA = row.insertCell();
        cellB = row.insertCell();
        cellA.innerHTML = key;
        if (key=="") {
          cellB.innerHTML = data[key].join(", ");
        }
        else if (key=="") {
          cellB.innerHTML = `<div>Name: ${data[key]["Name"]}</div><div>Species: ${data[key]["Species"]}</div>`;
        }
        else {
          cellB.innerHTML = data[key];
        }
      }
    }