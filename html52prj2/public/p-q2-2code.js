/**
 * HTML5スピードマスター p-q2-2
 */

// ★参考ページ：https://www.tohoho-web.com/ex/promise.html

const ERR_VAL = 0.30;

function func1(id) {
	return new Promise((okCallback, ngCallback) => {
		setTimeout(() => {
			if (Math.random() < ERR_VAL) {
				ngCallback(new Error("[ERROR]ID : " + id + "is NG."));
			}
			else {
				okCallback("[SUCCESS]ID : " + id + "is OK.");
			}
		}, Math.random() * 1000);
	});
}

/*
function sample_promise(id) {
	func1(id)
	.then(
		(ok) => {console.log("[THEN1]=" + ok); return func1(id)},
		(ng) => {console.log("[THEN1]=" + ng); return func1(id)}
	).then(
		(ok) => {console.log("[THEN2]=" + ok); return func1(id)},
		(ng) => {console.log("[THEN2]=" + ng); return func1(id)}
	).then(
		(ok) => {console.log("[THEN3]=" + ok); return func1(id)},
		(ng) => {console.log("[THEN3]=" + ng); return func1(id)}
	).then(
		(ok) => {console.log("[THEN4]=" + ok); return func1(id)},
		(ng) => {console.log("[THEN4]=" + ng); return func1(id)}
	);
}
*/
function sample_promise(id) {
	func1(id)
	.then(
		(ok) => {console.log("[THEN1]=" + ok); return func1(id+1)}
	).then(
		(ok) => {console.log("[THEN2]=" + ok); return func1(id+2)}
	).then(
		(ok) => {console.log("[THEN3]=" + ok); return func1(id+3)}
	).then(
		(ok) => {console.log("[THEN4]=" + ok); return func1(id+4)}
	).catch (
		(ng) => {console.log("[CATCH]=" + ng);}
	).then(
		(ok) => {console.log("[FINAL_THEN]=" + ok);}
	).finally(
		() => {console.log('*** Finally ***');}
	);
}

const LOOP_END = 1;

for (var i = 0; i < LOOP_END; i++) {
	var ret = ( '000' + i + 1 ).slice( -3 );
	sample_promise(ret);
}