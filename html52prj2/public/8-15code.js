/**
 * HTML5スピードマスター 8-15
 */
document.onvisibilitychange = function () {
	var video = document.getElementsByTagName("video")[0];
	if (document.visibilityState === "hidden") {
		alert(document.visibilityState);
		console.log(document.visibilityState);
		video.pause();
	}
	else if (document.visibilityState === "visible") {
		alert(document.visibilityState);
		console.log(document.visibilityState);
		video.play();
	}
}