// JavaScript Document

const input = document.getElementById("pass");


const passwords = ["usEr", "maMMa","mMia"];
const messages = ["i went for groceries","i want to pee", "i need toilet paper"]
const div = document.querySelector(".message")

//input.addEventListener("input",(e)=>{
//	if(e.target.value === password){
//		div.textContent = message;
//	}
//})

//input.addEventListener("input",(e)=>{
//	passwords.forEach((password,index)=>{
//		if(password === e.target.value){
//		div.textContent = messages[index]; 
//	}
//	})
//	})
//	

//input.addEventListener("input",(e)=>{
//	passwords.forEach((password,index)=>{
//	if(password.toLowerCase() === e.target.value.toLowerCase()){
//		div.textContent = messages[index];
//	}				  
//	})
//})

//input.addEventListener("input",(e)=>{
//	
//	const ltext = e.target.value.toLowerCase();
//	passwords.forEach((password,index)=>{
//	const LCPasswords = password.toLowerCase();
//		if(LCPasswords === ltext){
//			div.textContent = messages[index];
//		}
//		
//	})
//})

input.addEventListener("input",(e)=>{
	
	const ltext = e.target.value.toLowerCase();
	console.log(ltext);
	
	const LCPasswords = passwords.map(password=>password.toLowerCase());

	console.log(LCPasswords);

	
	for(let i = 0;i<LCPasswords.lenght;i++){
		if(ltext === LCPasswords[i]){
			div.textContent = messages[i];
		}
	}
	
})

	
	