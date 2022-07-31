/**
 * HTML5スピードマスター 1-70
 */

var msg = "grobal";
var fA = function () {
	function fB () {
		console.log("fb():" + msg)
	}
	console.log("fa():" + msg)
	fB();
};

function fA2(msg) {
	function fB () {
		console.log("fb():" + msg)
	}
	console.log("fa():" + msg)
	fB();
}

function fC(f) {
	var msg = new String("local");
	f();
	fA2(msg);
}

fC(fA);