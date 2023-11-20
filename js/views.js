views = localStorage.getItem('views');
if (views === null) {views = 1; } else {views++; }
localStorage.setItem('views', views); 
//
sessionStorage.setItem('viewer'+views, " ");