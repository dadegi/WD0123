var numeri = [32, 7, 84, 12];

// filter
const numero = numeri.filter((valore) => { // FUNZIONE FRECCIA: funzione senza nome, innestata all'interno di una variabile (e in questo caso assegna alla variabile il risultato della funzione) o di un metodo (e in questo caso è definita funzione di callback)
  return valore > 30;
});

document.getElementById('metodi').innerHTML += numero;

// map
const numero2 = numeri.map((valore2) => {
  return valore2 + 15;
});

document.getElementById('metodi2').innerHTML += numero2;

// forEach
numeri.forEach((valore3) => {
    document.getElementById('metodi3').innerHTML += valore3 + 15 + ', ';
});

// La funzione freccia di riga 18 scritta come funzione normale
// const numero3 = numeri.forEach(function(valore3) {
//     document.getElementById('metodi3').innerHTML += valore3 + 15 + ', ';
// });

//reduce
var numero4 = numeri.reduce((totale, valore) => {
    return totale + valore;
});

document.getElementById('metodi4').innerHTML = numero4;