/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
	return l1 * l2;
};
const areaResult = area(3, 4);
console.log(areaResult);

/* ESERCIZIO 2 OBB
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
	if (num1 === num2) {
		return (num1 + num2) * 3;
	} else {
		return num1 + num2;
	}
};

console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num) {
	if (num > 19) {
		return Math.abs(num - 19) * 3;
	} else {
		return Math.abs(num - 19);
	}
};
console.log(crazyDiff(3));

/* ESERCIZIO 4 OBB
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
	if ((n > 20 && n <= 100) || n === 400) {
		return true;
	} else {
		return false;
	}
};

console.log('ex 4', boundary(3));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
	if (str.startsWith('EPICODE')) {
		return str;
	} else {
		return 'EPICODE ' + str;
	}
};
console.log(epify('EPICODERS')); // EPICODERS
console.log(epify('Hello')); // EPICODE Hello

/* ESERCIZIO 6 OBB
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
	if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
		return true;
	} else {
		return false;
	}
};
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
	let splitString = str.split('');
	let reverseString = splitString.reverse();
	let finalString = reverseString.join('');
	return finalString;
};
console.log(reverseString('EPICODE'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirstPhrase = function (str) {
	let words = str.split(' ');
	let finalString = [];
	for (let i = 0; i < words.length; i++) {
		let firstChar = words[i].charAt(0);
		let uppercaseChar = firstChar.toUpperCase();
		let cutString = words[i].slice(1);
		let finalWord = uppercaseChar + cutString;
		finalString.push(finalWord);
	}
	console.log(finalString.join(' '));
};

upperFirstPhrase('hello world');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
	return str.slice(1, str.length - 1);
};
console.log(cutString('EPICODE'));

/* ESERCIZIO 10 OBB
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	return arr;
};
console.log(giveMeRandom(5));

/* EXTRA 2 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

var shoppingCart = [
	{
		price: 25,
		name: 'cover',
		id: 1,
		quantity: 2,
	},
	{
		price: 35,
		name: 'powerbank',
		id: 2,
		quantity: 1,
	},
	{
		price: 10,
		name: 'plug',
		id: 3,
		quantity: 5,
	},
];

var total = 0;

shoppingCartTotal();

function shoppingCartTotal() {
	shoppingCart.forEach((element) => {
		total += element.price * element.quantity;
	});
	console.log(`Il totale dovuto al negozio è di euro ${total}`);
}

/* EXTRA 3 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

var newObject = {
	price: 30,
	name: 'memKey',
	id: 4,
	quantity: 3,
};

addToShoppingCart(newObject);

function addToShoppingCart(article) {
	shoppingCart.push(article);
	console.log(`L'array ora contiene ${shoppingCart.length} elementi`);
	console.log(shoppingCart);
}

/* EXTRA 4 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

maxShoppingCart();

function maxShoppingCart() {
    var max = shoppingCart[0].price;
    var myArticle;
	shoppingCart.map((element) => {
		if (element.price > max) {
            max = element.price;
            myArticle = element;
		}
	});
    console.log(`L'articolo con il prezzo più alto è ${myArticle.name}, che costa Euro ${max}`);
}

/* EXTRA 5 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

latestShoppingCart();

function latestShoppingCart() {
    var last = shoppingCart.length - 1;
    console.table(shoppingCart[last]);
}

/* EXTRA 10 Y
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

var miaData = new Date(2023,01,02);

console.log(numGiorni(miaData));

function numGiorni(data) {
    let oggi = new Date();
    let diff = oggi - data;
    diff = Math.floor(diff/1000/60/60/24);
    return `Dal ${data} al ${oggi} sono passati ${diff} giorni`;
}
