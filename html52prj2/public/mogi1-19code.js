/**
 * HTML5スピードマスター mogi1-19
 */
addEventListener("load", function () {
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	let previousTime = 0;
	let x = 0;
	
	function drawGraph(timeStamp) {
		let time = Math.ceil(timeStamp - previousTime);
		previousTime = timeStamp;
		
		console.log(time);
		if ( time < 30 ) {
			ctx.fillStyle = "blue";
		}
		else {
			ctx.fillStyle = "red";
		}
		
		ctx.fillRect(x, 400, 5, -time);
		x += 10;
		
		if (x>1000) {
			x = 0;
			ctx.clearRect(0, 0, 1000, 400);
		}
		
		requestAnimationFrame(drawGraph);
	}
	
	requestAnimationFrame(drawGraph);
});