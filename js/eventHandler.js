let elem=document.querySelector('html');
//
elem.addEventListener('abort', eventHandler);
/*	The loading of a media is aborted	UiEvent, Event */
elem.addEventListener('afterprint', eventHandler);
/*	A page has started printing	Event */
elem.addEventListener('animationend', eventHandler);
/*	A CSS animation has completed	AnimationEvent */
elem.addEventListener('animationiteration', eventHandler);
/*	A CSS animation is repeated	AnimationEvent */
elem.addEventListener('animationstart', eventHandler);
/*	A CSS animation has started	AnimationEvent */
elem.addEventListener('beforeprint', eventHandler);
/*	A page is about to be printed	Event */
elem.addEventListener('beforeunload', eventHandler);
/*	Before a document is about to be unloaded	UiEvent, Event */
elem.addEventListener('blur', eventHandler);
/*	An element loses focus	FocusEvent */
elem.addEventListener('canplay', eventHandler);
/*	The browser can start playing a media (has buffered enough to begin)	Event */
elem.addEventListener('canplaythrough', eventHandler);
/*	The browser can play through a media without stopping for buffering	Event */
elem.addEventListener('change', eventHandler);
/*	The content of a form element has changed	Event */
elem.addEventListener('click', eventHandler);
/*	An element is clicked on	MouseEvent */
elem.addEventListener('contextmenu', eventHandler);
/*	An element is right-clicked to open a context menu	MouseEvent */
elem.addEventListener('copy', eventHandler);
/*	The content of an element is copied	ClipboardEvent */
elem.addEventListener('cut', eventHandler);
/*	The content of an element is cut	ClipboardEvent */
elem.addEventListener('dblclick', eventHandler);
/*	An element is double-clicked	MouseEvent */
elem.addEventListener('drag', eventHandler);
/*	An element is being dragged	DragEvent */
elem.addEventListener('dragend', eventHandler);
/*	Dragging of an element has ended	DragEvent */
elem.addEventListener('dragenter', eventHandler);
/*	A dragged element enters the drop target	DragEvent */
elem.addEventListener('dragleave', eventHandler);
/*	A dragged element leaves the drop target	DragEvent */
elem.addEventListener('dragover', eventHandler);
/*	A dragged element is over the drop target	DragEvent */
elem.addEventListener('dragstart', eventHandler);
/*	Dragging of an element has started	DragEvent */
elem.addEventListener('drop', eventHandler);
/*	A dragged element is dropped on the target	DragEvent */
elem.addEventListener('durationchange', eventHandler);
/*	The duration of a media is changed	Event */
elem.addEventListener('ended', eventHandler);
/*	A media has reach the end ("thanks for listening")	Event */
elem.addEventListener('error', eventHandler);
/*	An error has occurred while loading a file	ProgressEvent, UiEvent, Event */
elem.addEventListener('focus', eventHandler);
/*	An element gets focus	FocusEvent */
elem.addEventListener('focusin', eventHandler);
/*	An element is about to get focus	FocusEvent */
elem.addEventListener('focusout', eventHandler);
/*	An element is about to lose focus	FocusEvent */
elem.addEventListener('fullscreenchange', eventHandler);
/*	An element is displayed in fullscreen mode	Event */
elem.addEventListener('fullscreenerror', eventHandler);
/*	An element can not be displayed in fullscreen mode	Event */
elem.addEventListener('hashchange', eventHandler);
/*	There has been changes to the anchor part of a URL	HashChangeEvent */
elem.addEventListener('input', eventHandler);
/*	An element gets user input	InputEvent, Event */
elem.addEventListener('invalid', eventHandler);
/*	An element is invalid	Event */
elem.addEventListener('keydown', eventHandler);
/*	A key is down	KeyboardEvent */
elem.addEventListener('keypress', eventHandler);
/*	A key is pressed	KeyboardEvent */
elem.addEventListener('keyup', eventHandler);
/*	A key is released	KeyboardEvent */
elem.addEventListener('load', eventHandler);
/*	An object has loaded	UiEvent, Event */
elem.addEventListener('loadeddata', eventHandler);
/*	Media data is loaded	Event */
elem.addEventListener('loadedmetadata', eventHandler);
/*	Meta data (like dimensions and duration) are loaded	Event */
elem.addEventListener('loadstart', eventHandler);
/*	The browser starts looking for the specified media	ProgressEvent */
elem.addEventListener('message', eventHandler);
/*	A message is received through the event source	Event */
elem.addEventListener('mousedown', eventHandler);
/*	The mouse button is pressed over an element	MouseEvent */
elem.addEventListener('mouseenter', eventHandler);
/*	The pointer is moved onto an element	MouseEvent */
elem.addEventListener('mouseleave', eventHandler);
/*	The pointer is moved out of an element	MouseEvent */
elem.addEventListener('mousemove', eventHandler);
/*	The pointer is moved over an element	MouseEvent */
elem.addEventListener('mouseover', eventHandler);
/*	The pointer is moved onto an element	MouseEvent */
elem.addEventListener('mouseout', eventHandler);
/*	The pointer is moved out of an element	MouseEvent */
elem.addEventListener('mouseup', eventHandler);
/*	A user releases a mouse button over an element	MouseEvent */
elem.addEventListener('mousewheel', eventHandler);
/*	Deprecated. Use the wheel event instead	WheelEvent */
elem.addEventListener('offline', eventHandler);
/*	The browser starts working offline	Event */
elem.addEventListener('online', eventHandler);
/*	The browser starts working online	Event */
elem.addEventListener('open', eventHandler);
/*	A connection with the event source is opened	Event */
elem.addEventListener('pagehide', eventHandler);
/*	User navigates away from a webpage	PageTransitionEvent */
elem.addEventListener('pageshow', eventHandler);
/*	User navigates to a webpage	PageTransitionEvent */
elem.addEventListener('paste', eventHandler);
/*	Some content is pasted in an element	ClipboardEvent */
elem.addEventListener('pause', eventHandler);
/*	A media is paused	Event */
elem.addEventListener('play', eventHandler);
/*	The media has started or is no longer paused	Event */
elem.addEventListener('playing', eventHandler);
/*	The media is playing after being paused or buffered	Event */
elem.addEventListener('popstate', eventHandler);
/*	The window's history changes	PopStateEvent */
elem.addEventListener('progress', eventHandler);
/*	The browser is downloading media data	Event */
elem.addEventListener('ratechange', eventHandler);
/*	The playing speed of a media is changed	Event */
elem.addEventListener('reset', eventHandler);
/*	A form is reset	Event */
elem.addEventListener('scroll', eventHandler);
/*	An scrollbar is being scrolled	UiEvent, Event */
elem.addEventListener('search', eventHandler);
/*	Something is written in a search field	Event */
elem.addEventListener('seeked', eventHandler);
/*	Skipping to a media position is finished	Event */
elem.addEventListener('seeking', eventHandler);
/*	Skipping to a media position is started	Event */
elem.addEventListener('select', eventHandler);
/*	User selects some text	UiEvent, Event */
elem.addEventListener('show', eventHandler);
/*	A <menu> element is shown as a context menu	Event */
elem.addEventListener('stalled', eventHandler);
/*	The browser is trying to get unavailable media data	Event */
elem.addEventListener('storage', eventHandler);
/*	A Web Storage area is updated	StorageEvent */
elem.addEventListener('submit', eventHandler);
/*	A form is submitted	Event */
elem.addEventListener('suspend', eventHandler);
/*	The browser is intentionally not getting media data	Event */
elem.addEventListener('timeupdate', eventHandler);
/*	The playing position has changed (the user moves to a different point in the media)	Event */
elem.addEventListener('toggle', eventHandler);
/*	The user opens or closes the <details> element	Event */
elem.addEventListener('touchcancel', eventHandler);
/*	The touch is interrupted	TouchEvent */
elem.addEventListener('touchend', eventHandler);
/*	A finger is removed from a touch screen	TouchEvent */
elem.addEventListener('touchmove', eventHandler);
/*	A finger is dragged across the screen	TouchEvent */
elem.addEventListener('touchstart', eventHandler);
/*	A finger is placed on a touch screen	TouchEvent */
elem.addEventListener('transitionend', eventHandler);
/*	A CSS transition has completed	TransitionEvent */
elem.addEventListener('unload', eventHandler);
/*	A page has unloaded	UiEvent, Event */
elem.addEventListener('volumechange', eventHandler);
/*	The volume of a media is changed (includes muting)	Event */
elem.addEventListener('waiting', eventHandler);
/*	A media is paused but is expected to resume (e.g. buffering)	Event */
elem.addEventListener('wheel', eventHandler);
/*	The mouse wheel rolls up or down over an element	WheelEvent */
function eventHandler(event) {
	console.clear();
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
/* The data sent by the message emitter. */
console.info(messageEvent.origin);
/* A string representing the origin of the message emitter. */
console.info(messageEvent.lastEventId);
/* A string representing a unique ID for the event. */
console.info(messageEvent.source);
/* A MessageEventSource (which can be a WindowProxy, MessagePort, or ServiceWorker object) representing the message emitter. */
console.info(messageEvent.ports);
} 

// window.addEventListener("resize", function(){ console.log('resize : '+window) });
window.addEventListener("resize", function(){
  console.info('Window rezized');
});
/*
window.addEventListener("resize", () => {
		// CODE
});
// Cross-browser solution (IE support)
var resizeEvent = window.document.createEvent('UIEvents'); 
resizeEvent.initUIEvent('resize', true, false, window, 0); 
window.dispatchEvent(resizeEvent);
*/