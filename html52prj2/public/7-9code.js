/**
 * HTML5スピードマスター 7-9
 */
 
// Geolocation API
var id = navigator.geolocation.watchPosition(
	function (pos) {
		document.getElementById("latitude").innerHTML = pos.coords.latitude;
		document.getElementById("longitude").innerHTML = pos.coords.longitude;
	}
);


setTimeout(function(){
	alert("monitor done.");
	navigator.geolocation.clearWatch(id);
	document.getElementById("latitude").innerHTML = null;
	document.getElementById("longitude").innerHTML = null;
}, 5000);