// JavaScript Document

const btn =  document.querySelector("button");
const div = document.querySelector('div');
const names = ["Lily","Emily","Margaret","Broke","Chelsey","Paris","Hope","Mirabel"];

const prefix = ["I think the best","The ","Perfect ","I have feeling that","In my opinion,the best","For me,a perfect", "Hey! The","An ideal"];



const nameGenerator =()=>{
	const indexName = Math.floor(Math.random() * names.length);
	
	const indexPrefix = Math.floor(Math.random() * prefix.length);
	
	div.textContent = `${prefix[indexPrefix]} name for your child is ${names[indexName]}`;
}

btn.addEventListener("click",nameGenerator);