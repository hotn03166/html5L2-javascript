/**
 * HTML5スピードマスター mogi2-3
 */
var val = "grobal";

(function () {
	console.log(val);
	val = "local";
	(function () {
		console.log(val);
		val = "more local";
	}());
}());
console.log(val);