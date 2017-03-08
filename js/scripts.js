var a = prompt('Wpisz wartość a'),
    b = prompt('Wpisz wartość b'),
	value = ((a*a) + (2 * a * b) - (b*b));

alert('Wynik działania ' + ((a*a) + (2 * a * b) - (b*b)));	
console.log('Wartość a: ' + a + ' Wartość b: ' + b + ' Wynik: ' + value);

if (value > 0) {
   console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else {
	console.log('Wynik jest równy 0');
}

var valueScore = (value == 0) ? 'Wynik działania jest równy 0' : 'Wynik działania jest różny od 0';
    console.log(valueScore);