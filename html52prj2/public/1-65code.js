/**
 * HTML5スピードマスター 1-65
 */

function myCatName(){
	var func;
	var catName = "Lum";
	function closure(){
		return catName;
	};
	return closure;
}

var test = myCatName();
/*
var test = myCatName;

◆result: 
    ƒ closure(){
		return catName;
	}
*/	

console.log(test());