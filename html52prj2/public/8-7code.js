/**
 * HTML5スピードマスター 8-7
 */

const beforeP = performance.now();
const beforeD = Date.now();

for (let i=0;i<1000000;i++) {
}

const afterP = performance.now();
const afterD = Date.now();

console.log("経過時間（performance）: " + (afterP - beforeP) + "ms");
console.log("経過時間（Date）: " + (afterD - beforeD) + "ms");
