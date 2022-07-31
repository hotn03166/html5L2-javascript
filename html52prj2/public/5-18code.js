/**
 * HTML5スピードマスター 5-18
 */

var buffer = new ArrayBuffer(8);
 
var ary_16 = new Uint16Array(buffer);
for (var i=0; i<ary_16.length;i++){
	ary_16[i] = i+1;
}

for (var i=0; i<ary_16.length;i++){
	console.log("Uint16Array     " + ary_16[i]);
}

var buffer2 = new ArrayBuffer(8);
 
var ary_8 = new Int8Array(buffer2);
for (var i=0; i<ary_8.length;i++){
	ary_8[i] = i+1;
}

for (var i=0; i<ary_8.length;i++){
	console.log("Int8Array     " + ary_8[i]);
}

var buffer3 = new ArrayBuffer(8);
 
var ary_64 = new Float64Array(buffer2);
for (var i=0; i<ary_64.length;i++){
	ary_64[i] = i+1;
}

for (var i=0; i<ary_64.length;i++){
	console.log("Float64Array     " + ary_64[i]);
}

