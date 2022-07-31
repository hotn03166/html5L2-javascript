/**
 * HTML5スピードマスター 8-17
 */
for (var timing in performance.timing) {
	var milliseconds = performance.timing[timing];
	var seconds = 0;
	
	if (milliseconds > 0) {
		var d = new Date(milliseconds);
		seconds = d.getSeconds();
		milliseconds = d.getMilliseconds();
	}
	
	console.log(timing["toString"]() + ": " + seconds + "." + milliseconds);
}