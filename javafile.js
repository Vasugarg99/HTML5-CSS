function doFirst(){
    var button = document.getElementById("button");
    button.addEventListener("click",savecrap,false);
}
function savecrap(){
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    sessionStorage.setItem(one,two);
    display(one);
}
function display(one){
	var centerbox = document.getElementById("centerbox");
	var two = sessionStorage.getItem(one);
	centerbox.innerHTML = "Username: " + one + "<br/>Passcode: " + two; 
}
window.addEventListener("load",doFirst,false)




function getStuff(){
	document.querySelector('#first1').onclick=talk;
}
function talk(){
	alert('Congratulation!!');
}
window.onload=getStuff;