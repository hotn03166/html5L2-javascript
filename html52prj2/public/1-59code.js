/**
 * HTML5スピードマスター 1-59
 */
 
 var cat = {
	name: "プロパティはねこ",
	greet: function () {
		console.log(this === window);
		console.log(this);
		console.log(this.name);
		console.log(this[name]);
		console.log(this["name"]);
	}
};

function myao () {
	console.log(this === window);
}

function woo() {
	"use strict";
	console.log(this === window);
}

cat.greet();
myao();
woo();
console.log(this === window);