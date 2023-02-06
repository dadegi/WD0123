document.write('<h3>Questa cosa sarà scritta ALLA FINE della pagina web</h3>'); // 9

document.getElementById('saluto').innerHTML = 'CIAO!'; // 3
document.getElementById('saluto2').innerHTML = 'ALTRO SALUTO!'; // 4

window.alert('Questo è un alert!'); // 1
alert(8 + 3); // 2

console.log('verifica in console'); // 5

var valore = 15; // 6
console.log(valore); // 7
console.log(valore + 3); // 8

// Commento a riga singola

/* Commento
a riga multipla */

function cancella() {
    document.write('<h1>SCHERZETTO?!?!?!?!? 🤣</h1>');
}

numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 5;

var numeroTesto = 'numero 5';
document.getElementById('numerotesto').innerHTML = numeroTesto;
setTimeout(riassegna, 2000);

function riassegna() {
    numeroTesto = 5; // riassegnazione di variabili
    document.getElementById('numerotesto').innerHTML = (5 + 5) + numeroTesto;
}


var pippo = 'Pippo';

if (pippo === undefined) {
    document.getElementById('errore').innerHTML = 'La variabile è undefined';
} else {
    var errore = pippo; // Passaggio di valore da una variabile a un'altra
    document.getElementById('errore').innerHTML = errore;
}
