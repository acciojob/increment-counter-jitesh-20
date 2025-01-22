//your JS code here. If required.
let counter = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

let count = 0;
counter.textContent = count;
incrementBtn.addEventListener('click', ()=>{
	alert(count);
	count = count+1;
	counter.textContent = count;
})