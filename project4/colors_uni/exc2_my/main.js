// JavaScript Document
const div = document.createElement('div');
div.style.height = window.innerHeight/2 + "px";
div.style.width = "100%";
div.style.backgroundColor = "green";

document.body.addEventListener("click", ()=>{
	document.body.appendChild(div);
	
document.body.addEventListener("click", (e)=>{
	const x = e.clientX;
	const y = e.clientY;

	console.log(x);
	console.log(y);
	

	if (x === 0 || x % 2 === 0) {
	div.style.backgroundColor = "red";
}else if ((2*x)+1){
	div.style.backgroundColor = "blue";
}
	if (y === 0 || y % 2 === 0) {
	div.style.backgroundColor = "red";
}else if ((2*y)+1){
	div.style.backgroundColor = "blue";
}
})

	})


