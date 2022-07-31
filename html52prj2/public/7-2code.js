/**
 * HTML5スピードマスター 7-2
 */
 
// Geolocation API
function successCallback(pos) {
	var latitude = pos.coords.latitude;
	var longitude = pos.coords.longitude;
	document.getElementById("latitude").innerHTML = latitude;
	document.getElementById("longitude").innerHTML = longitude;
};

function errorCallback(pe) {
	alert(pe.message);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);