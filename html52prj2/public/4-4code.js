/**
 * HTML5スピードマスター 4-4
 */
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");

video.addEventListener("click", function() {
	var ctx = canvas.getContext("2d");
	ctx.drawImage(video, 0 ,0)
});

var buttons = document.getElementsByTagName("button");
buttons[0].onclick = function () {
	video.playbackRate = 2;
};

buttons[1].onclick = function () {
	video.playbackRate = 1;
};

buttons[2].onclick = function () {
	video.currentTime += 10;
};

buttons[3].onclick = function () {
	video.currentTime -= 10;
};

