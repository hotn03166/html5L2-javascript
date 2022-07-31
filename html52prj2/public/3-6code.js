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
	ctx.arc(x, 100, 50, 0, Math.PI * 2, false);
	ctx.fillStyle = "gold";
	ctx.fill();
	
	// アニメーション変数セット
	x += 10;
	if (x > 600) {
		x = 0;
	}
}, 100)
