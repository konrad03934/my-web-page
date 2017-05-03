'use strict';



//buttons function

function addContent() {
	if (document.getElementById('display').value != 0 || document.getElementById('display').value == "0.") {
		document.getElementById('display').value += this.value;
	} else {
		document.getElementById('display').value = this.value;
	}
};

document.querySelectorAll('.numb').forEach(function(element) {
	element.onclick = addContent;
});

	

//jeżeli bez for each to get element do wszystkich id
//document.getElementById('7').addEventListener('click', addContent);

//coma function
function addValueC() {
	
	if (document.getElementById('display').value == 0) {
		document.getElementById('display').value = "0" + document.getElementById('comma').value;	
	} else if (document.getElementById('display').value.indexOf(".") == -1) {
		document.getElementById('display').value += document.getElementById('comma').value;
	} 
	else {
//nic nie rób
	}
	
};


//function dla znaków
/*
function addSign() {
	if (document.getElementById('display').value.indexOf("+") == -1 || document.getElementById('display').value.indexOf("-") == -1 || document.getElementById('display').value.indexOf("*") == -1 || document.getElementById('display').value.indexOf("/") == -1) {
		document.getElementById('display').value +=  " " + this.value + " ";
	} else {
		//nic nie rób
	}
};
document.querySelectorAll('.sign').forEach(function(element) {
	element.onclick = addSign;
});
*/


function addSign() {
	
	document.getElementById('display').value += " " + this.value + " ";
}


document.querySelectorAll('.sign').forEach(function(element) {
	element.onclick = addSign;
});


//percent
function percent() {
	var liczba = document.getElementById('display').value;
	var afterComma = Number(liczba.substr(liczba.indexOf("*") + 1));
	afterComma = "0." + afterComma;
	var beforeComma = Number(liczba.substr(0, liczba.indexOf("*")));
		
	var obliczam = afterComma * beforeComma;
	document.getElementById('display').value = obliczam;
}
document.getElementById('per').addEventListener('click',percent);


//AC button
function remove() {
	document.getElementById('display').value = null;
};

document.getElementById('AC').addEventListener('click', remove);

//funkcja wykonawcza
function calculate() {
	var score = eval(document.getElementById('display').value);
	document.getElementById('display').value = score;
}
document.getElementById('evaluate').addEventListener('click', calculate);






	





