/**
 * HTML5スピードマスター 1-44
 */

var result = {};
var data = "foo=bar";


try {
	throw new Error(1, 'discription');
	result = JSON.parse(data);
}
catch(e) {
	console.log(e.description);
	console.log(e.message);
	console.log(e.name);
	console.log(e.number);
	console.log(e.stack);
	console.log(e.stackTraceLimit);
}
finally {
	console.log("finally process done!!");
}

/*
try {
	result = JSON.parse(data);
}
finally {
	console.log("finally process done!!");
}
*/