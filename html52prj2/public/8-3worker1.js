/**
 * HTML5スピードマスター 8-3 worker1
 */

self.onmessage = function (e) {
	var ttl = 0;
	for (var i=0; i<e.data;i++) {
		console.log("worker_cnt: "+i)
		ttl += i;
	}
	self.postMessage(ttl);
};