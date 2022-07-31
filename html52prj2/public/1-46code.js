/**
 * HTML5スピードマスター 1-46
 */

(function (){
	console.log("即時実行関数＿引数なし");
})();



(function (a, b, c){
	console.log("即時実行関数＿引数あり");
	console.log(a);
	console.log(b);
	console.log(c);
})('aaa', 'bbb', 1234567890);
 