// JavaScript Document

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e)=> {
	if(e.keyCode === 33 && red < 255){
		
		red++;
		green++;
		blue++;
		document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
//		console.log(e.keyCode,red,green,blue);	
	
	}else if(e.keyCode === 34 && red >= 0){
		
		red--;
		green--;
		blue--;
		document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
//		console.log(e.keyCode,red,green,blue);	
		
		}
	}

window.addEventListener('keydown',changeColor)


