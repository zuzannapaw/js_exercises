const input = document.getElementById("pass");


const passwords = ["user","spring"];
const messages = ["i went for groceries", "beautiful time of the year"];
const div = document.querySelector(".message")

input.addEventListener("input", (e)=>{
	div.textContent = '';
	
const text = e.target.value;
	
passwords.forEach((password, index) =>{
	if(password === text){
	div.textContent = messages[index];
//		
	}
})

input.addEventListener('focus',(e)=>{
	e.target.classList.add('active')
})

input.addEventListener('blur',(e)=>{
	e.target.classList.remove('active')
})

//if(password === e.target.value){
//		div.textContent = message;
//		
//	}else {
//		div.textContent = '';
//	}
//})

// JavaScript Document