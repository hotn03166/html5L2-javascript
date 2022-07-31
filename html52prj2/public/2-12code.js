/**
 * HTML5スピードマスター 2-12
 */
var button = document.getElementById("btn");
button.addEventListener("click", displayTime);

var event = new Event("click");
window.setInterval(function () {
	button.dispatchEvent(event);
}, 10000);

function displayTime() {
	var now = new Date();
	document.getElementById("time").textContent = now.toLocaleString();
}

window.onload = function() {
	var event = new Event("custom");
	
	window.addEventListener("custom", function() {
		alert("customevent is fired. ");
	});
	
	window.dispatchEvent(event);
};

var nextPage = window.open("test_2-2.html","next");
nextPage.postMessage("message", "http://localhost:8080");