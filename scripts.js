// Fix viewport on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// Force redraw when viewport size change
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
	console.log("Redrawing page...");
});

console.log("Successful loading :3");