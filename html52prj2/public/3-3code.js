/**
 * HTML5スピードマスター 3-3
 */
var canvas = document.getElementById("space");
var ctx = canvas.getContext("2d");


var x = 0;
setInterval(function () {
	// キャンバス全体を削除
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// 黄金の丸を描画
	ctx.fillRect(x,50,10,10);
	ctx.fillStyle = "gold";
	ctx.fill();
	ctx.fillRect(x,70,10,10);
	ctx.fillStyle = "gold";
	ctx.fill();
	
	// アニメーション変数セット
	x += 10;
	if (x > 600) {
		x = 0;
	}
	
	ctx.font = "48px sans-serif";
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.fillText("HIROMU OTANI", 50, 50);
}, 80)



