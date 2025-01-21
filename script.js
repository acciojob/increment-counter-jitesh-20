//your JS code here. If required.
let count=0;
let ele=document.getElementById("counter");
ele.innerText=count;
let btn=document.getElementById("incrementBtn");
btn.addEventListener("click",IncrementCounter);
function IncrementCounter(){
	alert(ele.innerText)
	ele.innerText=++count;
}