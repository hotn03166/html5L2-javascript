/**
 * HTML5スピードマスター cite5-13
 */
 
document.querySelector("#fileItem").addEventListener("change", function () {
	var fileItem = document.querySelector("#fileItem");
	// var item = fileItem.files[0];
	var item = fileItem.files.item(0);
	var reader = new FileReader();
	reader.onload = function(){
		alert(reader.result);
	};
	reader.readAsText(item);
});
