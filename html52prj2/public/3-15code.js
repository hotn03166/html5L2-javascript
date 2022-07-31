/**
 * HTML5スピードマスター 3-3
 */
var start = 0;
var divEle = document.getElementById("box");

function step(timestamp) {
	var progress = timestamp - start;
	divEle.style.left = (progress / 10) + "px";
	
	if (progress < 10000) {
		requestAnimationFrame(step);
	}
}
// IDを返す
var id = requestAnimationFrame(step);
cancelAnimationFrame(id);