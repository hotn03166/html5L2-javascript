/**
 * HTML5スピードマスター es06-1
 */

let t1 = "GROBAL SCOPE";
console.log(t1);
{
	let t1 = "LOCAL SCOPRE"
	console.log(t1);
}

t1 = "GROBAL SCOPE2";
console.log(t1);



let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];

delete arr1[0];

console.log(arr1);
console.log(arr2);


