/**
 * HTML5スピードマスター 1-58
 */

let arrow = () => {
	console.log("allow function");
};

arrow();

let arrow2 = (x, y) => {
	console.log("allow function : " +x+","+y);
};

arrow2("finger", "finger2");


let arrow3 = (x, y) => console.log(x + y);
arrow3('oyayubi', 'koyubi');


function func1(x, y, func) {
	console.log('func1: ' + func(x, y));
}

func1(7, 3, (x, y)=> (x+y)/2);

