/**
 * HTML5スピードマスター mogi1-3
 */
var myCat = {
	name: "ラム",
	age: 1,
	cute: true,
	sister:["きらら", "さら"]
};

localStorage.setItem("obj", JSON.stringify(myCat));

document.write(localStorage.getItem("obj"));
document.write("<br>");
document.write(JSON.parse(localStorage.getItem("obj")));