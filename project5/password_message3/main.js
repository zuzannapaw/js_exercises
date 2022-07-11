

const input = document.querySelector("input");
const passwords = ['jedEn','DwA'];
const messages = ['great!', 'working!'];
const div = document.querySelector('div');


const showMessage = (e) =>{

passwords.forEach((password,index)=>{
			if(password.toLowerCase() === e.target.value.toLowerCase()){	
		div.textContent = messages[index];
		}
	})
		
}


input.addEventListener('input',showMessage);

// JavaScript Document