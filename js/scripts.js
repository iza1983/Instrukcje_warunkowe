var a = prompt('Wpisz wartość a'),
    b = prompt('Wpisz wartość b'),
    value = ((a * a) + (2 * a * b) - (b * b));

alert('Wynik działania ' + value);
console.log('Wartość a: ' + a + ' Wartość b: ' + b + ' Wynik: ' + value);
console.log(value === 0 ? 'Wynik równy 0' : (value > 0 ? 'Wynik dodatni' : 'Wynik ujemny'));
