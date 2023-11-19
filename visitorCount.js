var visitors = localStorage.getItem('visitors');
if (visitors === null) {visitors = 1; } else {visitors++; }
localStorage.setItem('visitors', visitors); 
localStorage.setItem('visitor'+visitors);