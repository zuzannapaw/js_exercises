// JavaScript Document

//I example

//const add = ()=>{
//	let number = 0;
//	number++;
//	document.body.textContent = `Counter shows ${number}`;
//}
//document.addEventListener('click',add)


//II example
//
//const add = (start = 0)=>{
//	let number = start;
//	return ()=>{
//		number++;
//		document.body.textContent = `actual counter is ${number} `
//	}
//}
//
//const counter =add()
//
//document.addEventListener('click',counter)

//zwracamy z   innej funkcji funkcję

const user = (name="",age)=>{
	let userName = name;
	let userAge = age;
	
	function showName(){
		console.log(`Hello ${userName}, ${userAge >= 18 ?'You can buy a beer' : 'You cant buy a beer'}`);
	}
	return showName
}

const lucy = user("Lucy",16)
const brandon = user("Brandon",20)

lucy()
brandon()








