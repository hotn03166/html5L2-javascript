/**
 * HTML5スピードマスター 2-13
 */
document.getElementById("foo").addEventListener("blur", function(e){
	if(e.target.value === ""){
		alert(e.timeStamp + "<br>" + e.type);
	}
});