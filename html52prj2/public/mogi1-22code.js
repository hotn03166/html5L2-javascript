/**
 * HTML5スピードマスター mogi1-22
 */


sessionStorage.foo = "bar";
sessionStorage.foo = document.createElement("div");

function bar() {
	sessionStorage.foo2 = "local";
};

bar();
document.write(sessionStorage.foo2);
document.write("<br>");
document.write(sessionStorage.foo);

localStorage.clear();

var lbl = document.getElementById('lbl-0');
var btn = document.getElementById('btn-0');
btn.addEventListener('click',function(){
	localStorage.clear();
	localStorage.setItem(lbl.value, lbl.value);
});

window.addEventListener("Storage", function(e){
	alert("storage event:" + e);
	document.write(e);
});