/**
 * HTML5スピードマスター 5-23
 */

document.getElementById("msg").addEventListener("change", function (e) {
	var lcl_msg = new Blob(["<span>" + e.target.value + "</span>"],{type: "text/html"});
	var url = URL.createObjectURL(lcl_msg);
	document.getElementById("output").src = url;
	
	localStorage.setItem("url", url);
});

window.addEventListener("storage", function(e){
	if(e.key === "url") {
		document.getElementById("output").src = e.newValue;
	}
});

