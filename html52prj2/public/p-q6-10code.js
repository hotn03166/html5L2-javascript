/**
 * HTML5スピードマスター p-q6-10
 */

var input = document.getElementById("inputFile");
input.onchange = function () {
	var file = input.files[0];
	var url = URL.createObjectURL(file);
	var imgOut = document.getElementById("imgOut");
	imgOut.src = url;
};