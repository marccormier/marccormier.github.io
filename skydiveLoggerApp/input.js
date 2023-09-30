document.getElementById('inputfile')
.addEventListener('change', function() {
var fr = new FileReader();
fr.onload = function() {
document.getElementById('output')
.textContent = fr.result;
}
fr.readAsText(this.files[0]);
})
//
document.getElementById('inputfileJsonSkydive')
.addEventListener('change', function() {
var fr = new FileReader();
fr.onload = function() {
document.getElementById('outputJsonSkydive')
.textContent = fr.result;
}
fr.readAsText(this.files[0]);
})