const slideList = [{
	img: "images/img1.jpg",
	text:"First text"
},
{
	img: "images/img2.jpg",
	text:"Second text"					 
},
{
	img: "images/img3.jpg",
	text:"Third text"					 
}]

const image = document.querySelector("img .slider");
const h1 = document.querySelector("h1 .slider");

const dots = [...document.querySelectorAll('.dots span')];

const time=3000;
let active = 0;

const changeDots =()=>{
	const activeDot = dots.findIndex(dot=>dot.contains('active'));
	dots[activeDot].classList.remove('active');
	
	dots[active].classList.add('active');
}

const changeSlide =()=>{
	active++
	if(active ==slideList.length){
		active = 0;
	}
//	a co jesli kropek byloby wiecej?
	image.src = slideList[active].img
	h1.textContent = slideList[active].text;
	changeDots()
//	dziecko changeSlide
	
}

const keyChangeSlide =()=> {
if(keyCode == 37 || keyCode == 39){
	clearInterval(indexInterval);
	if(keyCode ==37){
		active++
	}else{
		active--
	}
	console.log(indexInterval);
	image.src = slideList[active].img
	h1.textContent = slideList[active].text;
	changeDots()
	indexInterval = setInterval(changeSlide,time);
	}
}
let indexInterval = setInterval(changeSlide,time);
window.addEventListener('keydown',keyChangeSlide)
// JavaScript Document