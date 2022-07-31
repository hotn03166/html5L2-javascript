/**
 * HTML5スピードマスター cite8-3
 */
 
 /*
document.addEventListener("visibilitychange", function(e){
	if(document.visibilityState=="visible") console.log("見ている");
	else console.log("見ていない")
}, false);
*/

document.addEventListener("visibilitychange", function(e){
	if(document.hidden == false) console.log("見ている");
	else console.log("見ていない");
}, false);