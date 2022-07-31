/**
 * HTML5スピードマスター 8-3 main worker
 */

// ワーカの生成 
var worker = new Worker("8-3worker1.js");

worker.onmessage = function (e) {
	console.log("main worker:" + e.data);
	worker.terminate();
};

worker.postMessage(100);