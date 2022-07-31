/**
 * HTML5スピードマスター 7-7
 */
 
// Geolocation API
function successCallback(pos) {
	var latitude = pos.coords.latitude;
	var longitude = pos.coords.longitude;
	var timestamp = pos.timestamp;
	document.getElementById("latitude").innerHTML = latitude;
	document.getElementById("longitude").innerHTML = longitude;
	document.getElementById("timestamp").innerHTML = new Date(timestamp).toLocaleString('ja-JP-u-ca-japanese');;
};

function errorCallback(pe) {
	alert(pe.message);
};

navigator.geolocation.watchPosition(successCallback, errorCallback);
