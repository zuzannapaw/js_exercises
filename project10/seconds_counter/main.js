// JavaScript Document

const info =()=>{
	let number = 0;
	function showTime(){
		number++
		document.body.textContent = `${number} seconds`;
	}
	
	return showTime;
}

const start = info();

//wywołuje funkcje info z i to co sie z niej zwraca wpisuje do zmiennej start. wywołuje potem zmienna start która wie jaka jest wartosc number bo number zostało użyte w drugiej funkcji. Przechowujemy to co ona zwraca

setInterval(start,1000);