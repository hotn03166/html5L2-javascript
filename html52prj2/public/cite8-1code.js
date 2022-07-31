/**
 * HTML5スピードマスター cite8-1
 */
var milli = Date.now();
var micro = performance.now();
var a = 10000;
var b = 20000;
var c = a + b;
document.write('Date.now():'+(Date.now() - milli)+'ms');
document.write('<br>');
document.write('performance.now():'+(performance.now() - micro)+'ms');