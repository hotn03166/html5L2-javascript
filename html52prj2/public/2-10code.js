/**
 * HTML5スピードマスター 2-10
 */
var outer = document.getElementById("outer");
outer.onclick = function(){
	console.log("OUTER is clicked");
};

var inner = document.getElementById("inner");
inner.onclick = function(){
	console.log("INNER is clicked");
};