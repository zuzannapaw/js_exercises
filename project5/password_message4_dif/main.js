const input = document.querySelector("input");
const passwords = ['One','TWo'];
const messages = ['great!', 'working!'];
const div = document.querySelector('div');

passwords.forEach((password,i)=>{
	passwords[i] = password.toLowerCase();
	
})
const showMessage = (e) =>{

passwords.forEach((password,index)=>{
			if(password === e.target.value.toLowerCase()){	
		div.textContent = messages[index];
		}
	})
		
}


input.addEventListener('input',showMessage);