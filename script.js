//your JS code here. If required.
let count=0;
let ele=document.getElementById("counter");
ele.innerText=count;
function IncrementCounter(){
	alert(ele.innerText)
	ele.innerText=++count;
}