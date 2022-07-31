/**
 * HTML5スピードマスター 4-9
 */
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");

video.play();
video.onclick = function () {
	var ctx = canvas.getContext("2d");
	ctx.scale(1, -1);
	ctx.drawImage(video, 0, -video.videoHeight);
};