// Fix viewport on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// Force redraw when viewport size change
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
	console.log("Redrawing page...");
});
// Yandex.Metrika
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(51709358, "init", {
	id:51709358,
	clickmap:true,
	trackLinks:true,
	accurateTrackBounce:true,
	webvisor:true
});

console.log("Successful loading :3");