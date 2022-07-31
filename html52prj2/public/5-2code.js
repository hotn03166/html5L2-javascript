/**
 * HTML5スピードマスター 5-2
 */
window.addEventListener("storage", function(event) {
	window.alert(event);
	window.alert(event.oldValue);
	window.alert(event.newValue);
});
 
localStorage.setItem('name', 'evilCat');
console.log(localStorage);
console.log(localStorage.length);
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
console.log(localStorage.length);
console.log(localStorage.getItem('name'));
