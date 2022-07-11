const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

let indexText = 0;
const time= 40;

const addLetter =()=>{
	spanText.textContent += txt[indexText];
	indexText++;
	if(indexText===txt.lenght) clearInterval(indexTyping)
}

const cursorAnimation=()=>{
spanCursor.classList.toggle('active');
}
const indexTyping= setInterval(addLetter,time);

setInterval(cursorAnimation,400);

// JavaScript Document