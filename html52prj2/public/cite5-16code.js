/**
 * HTML5スピードマスター cite5-16
 */
var buf = new ArrayBuffer(8);
var i8 = new Int8Array(buf);

i8[0] = 0x12;
i8[1] = 0x34;
i8[2] = 0x56;
i8[3] = 0x78;

var i16 = new Int16Array(buf);

var i32 = new Int32Array(buf);
var f64 = new Float64Array(buf);


console.log(i16[0].toString(16));
console.log(i8[0].toString(16));
console.log(i32[0].toString(16));
console.log(f64[0].toString(16));