// JavaScript Document

const pos = [];

const addBtn = document.querySelector(".add");

const cleanBtn = document.querySelector(".clean");

const adviceBtn = document.querySelector(".showAdvice");

const optionsBtn = document.querySelector(".showOptions");

const input = document.querySelector("input");

const h1 = document.querySelector("h1");



addBtn.addEventListener("click",(e)=>{
	let value = input.value;
	e.preventDefault();
	if(input.value){
	pos.push(value );
		console.log(pos);
	}
	input.value = "";
	
	
//	wazne
	
	
})

cleanBtn.addEventListener("click",()=>{
	if(pos.lenght){
		pos.pop();
		console.log(pos);
	}
})

adviceBtn.addEventListener("click",()=>{
	let indexPos = Math.floor(Math.random() * pos.length);
	h1.textContent = pos[indexPos];
	
	
})

optionsBtn.addEventListener("click",()=>{
	alert(`Your possibilities: ${pos}`);
})

