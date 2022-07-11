// JavaScript Document
//
//const btnMain = document.querySelector('button.main');
//const btnReset = document.querySelector('button.reset');
////const panel = document.querySelector('.time div');
//let time = document.querySelector('.time div')


//let time = 0;
//let active = false
//let idI;

//const timer = ()=>{
////	if active jest false czy true???
//	if(!active){
//		active =!active
//		btnTime.textContent = 'Pause';
//		idI = setInterval(start, 10);
//	}else{
//		active =!active
//		btnTime.textContent = 'Start'
//		clearInterval(idI)
//	}
//}
//
//const start =()=>{
//	time++;
//	panel.textContent =  (time / 100).toFixed(2);
//}
//
//const reset =()=>{
//	time = 0;
//	panel.textContent = '---';
//	active=false;
//		btnTime.textContent = 'Start'
//		clearInterval(idI)
//	
//}



////MY
//let number = 0;
//let interval;
//
//function showTime(){
//	
//	function increase(){
//	
//		time.textContent = '';
//		btnMain.textContent = "Pause";
//		number++
//		time.textContent += number
//		
//		}
//		interval = setInterval(increase,100);
//		
//	
//	}
//
//function pause(){
//	
//	btnMain.textContent = "Start";
//	clearInterval(interval);
//		
//}
//
//const reset = ()=>{
//	time = '---';
//}
//
//
//btnMain.addEventListener('click',showTime);
//btnMain.addEventListener('click',pause);
//btnReset.addEventListener('click',reset)
//

//NEW

let time = 0;
let active = false;
let index;

const btnMain = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const showTime = document.querySelector('div.time div');

const addTime =()=>{
	let seconds = time/100
	if(seconds<10){
		showTime.textContent = `0${seconds.toFixed(2)}`;
	}else{
		showTime.textContent = seconds.toFixed(2);
	}
	time++;
}
const timer =()=>{
	if(!active){
		active =!active;
		btnMain.textContent = 'Pause';
		index = setInterval(addTime,10);
	}else{
		active=!active;
		btnMain.textContent = 'Start';
		clearInterval(index);
	}
}

const reset =()=>{
	time=0;
	clearInterval(index);
	showTime.textContent = '---';
	btnMain.textContent = 'Start';
	active = false;
	
}

btnMain.addEventListener('click',timer);
btnReset.addEventListener('click',reset);