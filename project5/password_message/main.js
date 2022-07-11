const input = document.getElementById("pass");


const password = "user";
const message = "i went for groceries"
const div = document.querySelector(".message")

input.addEventListener("input", (e)=>{
	if(password === e.target.value){
		div.textContent = message;
		
	}else {
		div.textContent = '';
	}
})


input.addEventListener('focus',(e)=>{
	e.target.classList.add('active')
})

input.addEventListener('blur',(e)=>{
	e.target.classList.remove('active')
})


// JavaScript Document