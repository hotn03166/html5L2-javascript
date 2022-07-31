/**
 * HTML5スピードマスター cite1-25
 */
let a = 0;
// const a = 0; エラーとなる
eval('a = 1;document.write(a);document.write(a);');
document.write(a);


let b = 0;

if ('あ') {
	alert("条件式に数字だけはTRUEと同じ");
}


console.log('isFinite("0"): ' + isFinite("0"));
console.log('Number.isFinite("0"): ' + Number.isFinite("0"));

function f(){
		var g = 10;
		confirm(g);
}
var d = f();
confirm(d);

q = 100;
confirm(q);

var array = new Array(3);
console.log(array);
var array2 = new Array(3,2);
console.log(array2);


let pmsg = prompt("プロンプトの動作確認");
alert(pmsg);