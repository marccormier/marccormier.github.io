let elem=document.querySelector('html');
elem.addEventListener('abort', eventHandler);
elem.addEventListener('afterprint', eventHandler);
elem.addEventListener('animationend', eventHandler);
elem.addEventListener('animationiteration', eventHandler);
elem.addEventListener('animationstart', eventHandler);
elem.addEventListener('beforeprint', eventHandler);
elem.addEventListener('beforeunload', eventHandler);
elem.addEventListener('blur', eventHandler);
elem.addEventListener('canplay', eventHandler);
elem.addEventListener('canplaythrough', eventHandler);
elem.addEventListener('change', eventHandler);
elem.addEventListener('click', eventHandler);
elem.addEventListener('contextmenu', eventHandler);
elem.addEventListener('copy', eventHandler);
elem.addEventListener('cut', eventHandler);
elem.addEventListener('dblclick', eventHandler);
elem.addEventListener('drag', eventHandler);
elem.addEventListener('dragend', eventHandler);
elem.addEventListener('dragenter', eventHandler);
elem.addEventListener('dragleave', eventHandler);
elem.addEventListener('dragover', eventHandler);
elem.addEventListener('dragstart', eventHandler);
elem.addEventListener('drop', eventHandler);
elem.addEventListener('durationchange', eventHandler);
elem.addEventListener('ended', eventHandler);
elem.addEventListener('error', eventHandler);
elem.addEventListener('focus', eventHandler);
elem.addEventListener('focusin', eventHandler);
elem.addEventListener('focusout', eventHandler);
elem.addEventListener('fullscreenchange', eventHandler);
elem.addEventListener('fullscreenerror', eventHandler);
elem.addEventListener('hashchange', eventHandler);
elem.addEventListener('input', eventHandler);
elem.addEventListener('invalid', eventHandler);
elem.addEventListener('keydown', eventHandler);
elem.addEventListener('keypress', eventHandler);
elem.addEventListener('keyup', eventHandler);
elem.addEventListener('load', eventHandler);
elem.addEventListener('loadeddata', eventHandler);
elem.addEventListener('loadedmetadata', eventHandler);
elem.addEventListener('loadstart', eventHandler);
elem.addEventListener('message', eventHandler);
elem.addEventListener('mousedown', eventHandler);
elem.addEventListener('mouseenter', eventHandler);
elem.addEventListener('mouseleave', eventHandler);
elem.addEventListener('mousemove', eventHandler);
elem.addEventListener('mouseover', eventHandler);
elem.addEventListener('mouseout', eventHandler);
elem.addEventListener('mouseup', eventHandler);
elem.addEventListener('mousewheel', eventHandler);
elem.addEventListener('offline', eventHandler);
elem.addEventListener('online', eventHandler);
elem.addEventListener('open', eventHandler);
elem.addEventListener('pagehide', eventHandler);
elem.addEventListener('pageshow', eventHandler);
elem.addEventListener('paste', eventHandler);
elem.addEventListener('pause', eventHandler);
elem.addEventListener('play', eventHandler);
elem.addEventListener('playing', eventHandler);
elem.addEventListener('popstate', eventHandler);
elem.addEventListener('progress', eventHandler);
elem.addEventListener('ratechange', eventHandler);
elem.addEventListener('reset', eventHandler);
elem.addEventListener('scroll', eventHandler);
elem.addEventListener('search', eventHandler);
elem.addEventListener('seeked', eventHandler);
elem.addEventListener('seeking', eventHandler);
elem.addEventListener('select', eventHandler);
elem.addEventListener('show', eventHandler);
elem.addEventListener('stalled', eventHandler);
elem.addEventListener('storage', eventHandler);
elem.addEventListener('submit', eventHandler);
elem.addEventListener('suspend', eventHandler);
elem.addEventListener('timeupdate', eventHandler);
elem.addEventListener('toggle', eventHandler);
elem.addEventListener('touchcancel', eventHandler);
elem.addEventListener('touchend', eventHandler);
elem.addEventListener('touchmove', eventHandler);
elem.addEventListener('touchstart', eventHandler);
elem.addEventListener('transitionend', eventHandler);
elem.addEventListener('unload', eventHandler);
elem.addEventListener('volumechange', eventHandler);
elem.addEventListener('waiting', eventHandler);
elem.addEventListener('wheel', eventHandler);
function eventHandler(event) {
	console.log('event : '+event.target.tagName);
	console.groupCollapsed('event event.target event.target.tagName');
	console.log(event);
	console.log(event.target);
	//event(event);
}
function mouseEvent(event) {console.info('mouseEvent'); }
function keyboardEvent(event) {console.info('keyboardEvent'); }
function messageEvent(event) {
console.info(event);
console.info(messageEvent.data);
console.info(messageEvent.origin);
console.info(messageEvent.lastEventId);
console.info(messageEvent.source);
console.info(messageEvent.ports);
} 
window.addEventListener("resize", function(){ console.log('resize : '+window) });
/*
window.addEventListener("resize", () => {
		// CODE
});
// Cross-browser solution (IE support)
var resizeEvent = window.document.createEvent('UIEvents'); 
resizeEvent.initUIEvent('resize', true, false, window, 0); 
window.dispatchEvent(resizeEvent);
*/