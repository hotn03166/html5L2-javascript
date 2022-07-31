/**
 * HTML5スピードマスター 1-68
 */

// WITH句は非推奨
with(document.querySelector("#element").style) {
	backgroundColor = "#1485CC";
}

// OBJによる省略は推奨
var divObj = document.querySelector("#element").style;
divObj.backgroundColor = "#CCCCCC";