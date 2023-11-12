var visitors = localStorage.getItem('visitors');
if (visitors === null) {visitors = 1; } else {visitors++; }
localStorage.setItem("visitors", visitors);
if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition); } 
else {alert("Geolocation is not supported by this browser."); }
function showPosition(position) {
	loc=position.coords.latitude+","+position.coords.longitude; 
	localStorage.setItem('visitors', visitors); 
	localStorage.setItem('visitor'+visitors, loc);
}