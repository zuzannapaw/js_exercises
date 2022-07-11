const input = document.querySelector("input");
const passwords = ['One','TWo'];
const messages = ['great!', 'working!'];
const div = document.querySelector('div');

const LCPasswords = passwords.map(password=>password.toLowerCase())
	

const showMessage = (e) =>{
	
 const textInput = e.target.value.toLowerCase();
	
	for(let i = 0; i<LCPasswords.lenght;i++){
		if(textInput === LCPasswords[i]){
			div.textContent = messages[i];
		}
	}

}


input.addEventListener('input',showMessage);// JavaScript Document