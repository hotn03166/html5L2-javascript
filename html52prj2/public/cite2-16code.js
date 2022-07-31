/**
 * HTML5スピードマスター cite2-16
 */

var btn = document.getElementById('btn-prompt');
btn.addEventListener('click',function(){
  prompt('prompt');
});

var btn2 = document.getElementById('btn-alert');
btn2.addEventListener('click',function(){
  alert('alert');
});

var btn3 = document.getElementById('btn-confirm');
btn3.addEventListener('click',function(){
  confirm('confirm');
});

console.dirxml(btn);
console.dir(btn);