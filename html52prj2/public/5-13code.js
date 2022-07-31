/**
 * HTML5スピードマスター 5-13
 */
var showFilename = function () {
	var inputF = document.querySelector("#files");
	var files = inputF.files;
	for (var i=0;i<files.length;i++) {
		var file = files[i];
		console.log(file.name);
		// console.dir(file.name);
	}
	console.log("ファイル数："+files.length);
};

var selector = document.querySelector("#files").addEventListener("change", showFilename);

var showFileImg = function () {
	var inputF = document.querySelector("#fileImg");
	var files = inputF.files;
	var reader = new FileReader();
	reader.onload = function () {
		var dataURI = this.result;
		document.body.innerHTML += '<a href=' + dataURI + ' target="_blank"><img src=' + dataURI + '></a>'
	};
	reader.readAsDataURL(files[0]);
};

var selector = document.querySelector("#fileImg").addEventListener("change", showFileImg);