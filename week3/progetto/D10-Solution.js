const movies = [
	{
		Title: 'The Lord of the Rings: The Fellowship of the Ring',
		Year: '2001',
		imdbID: 'tt0120737',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
	},

	{
		Title: 'The Lord of the Rings: The Return of the King',
		Year: '2003',
		imdbID: 'tt0167260',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings: The Two Towers',
		Year: '2002',
		imdbID: 'tt0167261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of War',
		Year: '2005',
		imdbID: 'tt0399295',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'Lords of Dogtown',
		Year: '2005',
		imdbID: 'tt0355702',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings',
		Year: '1978',
		imdbID: 'tt0077869',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1990',
		imdbID: 'tt0100054',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
	},
	{
		Title: 'The Lords of Salem',
		Year: '2012',
		imdbID: 'tt1731697',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
		Year: '1984',
		imdbID: 'tt0087365',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1963',
		imdbID: 'tt0057261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
	},
	{
		Title: 'The Avengers',
		Year: '2012',
		imdbID: 'tt0848228',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Infinity War',
		Year: '2018',
		imdbID: 'tt4154756',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Age of Ultron',
		Year: '2015',
		imdbID: 'tt2395427',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Endgame',
		Year: '2019',
		imdbID: 'tt4154796',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
	},
];

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

console.log('Esercizio A: ' + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 20);

console.log('Esercizio B: ' + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
	name: 'John',
	surname: 'Doe',
	age: 30,
};

console.log('Esercizio C: ')
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log('Esercizio D: ')
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['C++', 'JavaScript'];

console.log('Esercizio E: ')
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.unshift('Typescript');

console.log('Esercizio F: ')
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log('Esercizio G: ')
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
	return Math.floor(Math.random() * 6 + 1);
};

console.log('Esercizio 1: ' + dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
	if (n1 > n2) {
		return n1;
	} else {
		return n2;
	}
};

console.log('Esercizio 2: ' + whoIsBigger(25, 47));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

var arraysplit = [];
const splitMe = function (str) {
    arraysplit.push(str.split(' '));
	return str.split(' ');
};

console.log(arraysplit);
console.log('Esercizio 3: ' + splitMe('Esercizi Javascript seconda settimana'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (str, first) {
	if (first) {
		return str.substring(1);
	} else {
		return str.substring(0, str.length - 1);
	}
};

console.log('Esercizio 4: ' + deleteOne('Dario', true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let currentLetter = str[i];
		if (
			currentLetter !== '0' &&
			currentLetter !== '1' &&
			currentLetter !== '2' &&
			currentLetter !== '3' &&
			currentLetter !== '4' &&
			currentLetter !== '5' &&
			currentLetter !== '6' &&
			currentLetter !== '7' &&
			currentLetter !== '8' &&
			currentLetter !== '9'
		) {
			result += currentLetter;
		}
	}
	return result;
};

console.log('Esercizio 5a: ' + onlyLetters('1 settimana HTML e 2 settimane Javascript'));

const onlyLetters2 = function (str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let currentLetter = str[i];
		if (isNaN(currentLetter)) {
			result += currentLetter;
		}
	}
	return result;
};

console.log('Esercizio 5b: ' + onlyLetters2('1 settimana HTML e 2 settimane Javascript'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (email) {
	return email.indexOf('@') > 0 && email.indexOf('.') > 0;
};

console.log('Esercizio 6: ' + isThisAnEmail('prova'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return days[new Date().getDay()];
};

console.log('Esercizio 7: ' + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (numberOfDices) {
	let result = {
		sum: 0,
		values: [],
	};

	for (let i = 0; i < numberOfDices; i++) {
		let diceRoll = dice();
		result.sum += diceRoll;
		result.values.push(diceRoll);
	}

	return result;
};

console.log('Esercizio 8: ')
console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (selectedDate) {
	let today = Date.now();
	let selectedInMilliseconds = Date.parse(selectedDate); //ms
	return Math.floor((today - selectedInMilliseconds) / (1000 * 60 * 60 * 24));
};

let date = howManyDays('10 Feb 2023');

console.log('Esercizio 9: ' + date);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
	let today = new Date();
	let myBirthday = new Date(1967, 1, 18);
	let isTodayMyBirthday = false;
	if (
		today.getDay() === myBirthday.getDay() &&
		today.getMonth() === myBirthday.getMonth()
	) {
		isTodayMyBirthday = true;
	}
	return isTodayMyBirthday;
};

console.log('Esercizio 10: ' + isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const user = {
	name: 'Mario',
	surname: 'Rossi',
};

const deleteProp = function (obj, prop) {
	delete obj[prop];
	return obj;
};

let newuser = deleteProp(user, 'name');

console.log('Esercizio 11: ')
console.log(newuser);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function () {
	let result = { Year: 0 };
	for (let i = 0; i < movies.length; i++) {
		let currentYear = parseInt(movies[i].Year);
		if (currentYear > result.Year) {
			result = movies[i];
		}
	}

	return result;
};

console.log('Esercizio 12: ')
console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function () {
	return movies.length;
};

console.log('Esercizio 13: ' + countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function () {
	let result = [];
	for (let i = 0; i < movies.length; i++) {
		result.push(movies[i].Year);
	}

	return result;
};

console.log('Esercizio 14: ' + onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function () {
	let result = [];
	for (let i = 0; i < movies.length; i++) {
		if (parseInt(movies[i].Year) < 2000) {
			result.push(movies[i]);
		}
	}

	return result;
};

console.log('Esercizio 15: ')
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function () {
	let result = 0;
	for (let i = 0; i < movies.length; i++) {
		result += parseInt(movies[i].Year);
	}
	return result;
};

console.log('Esercizio 16: ' + sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (keyword) {
	let result = [];
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].Title.indexOf(keyword) !== -1) {
			result.push(movies[i]);
		}
	}
	return result;
};

console.log('Esercizio 17: ')
console.log(searchByTitle('Greystoke'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (word) {
	let result = {
		match: [],
		unmatch: [],
	};
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].Title.indexOf(word) !== -1) {
			result.match.push(movies[i]);
		} else {
			result.unmatch.push(movies[i]);
		}
	}
	return result;
};

console.log('Esercizio 18: ');
console.log(searchAndDivide('Lord'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (index) {
	let result = [];
	for (let i = 0; i < movies.length; i++) {
		if (index !== i) {
			result.push(movies[i]);
		}
	}
	return result;
};

console.log('Esercizio 19: ');
console.log(removeIndex(12));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectContainer = function () {
	const container = document.getElementById('container');
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectAllTds = function () {
	const allTds = document.querySelectorAll('td');
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printAllTds = function () {
	const allTds = document.querySelectorAll('td');
	for (let i = 0; i < allTds.length; i++) {
		console.log(allTds[i].innerText);
	}
};

console.log('Esercizio 22:');
console.log(printAllTds());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addRedBackground = function () {
	const allLinks = document.querySelectorAll('a');
	for (let i = 0; i < allLinks.length; i++) {
		allLinks[i].style.backgroundColor = 'red';
	}
};

addRedBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addNewListItem = function () {
	const ul = document.getElementById('myList');
	const newLi = document.createElement('li');
	newLi.innerText = 'Esercizio 24: Nuovo elemento';
	ul.appendChild(newLi);
};

addNewListItem();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyList = function () {
	const ul = document.getElementById('myList2');
	ul.innerHTML = '';
};

emptyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addTestClass = function () {
	const allTrs = document.querySelectorAll('tr');
	for (let i = 0; i < allTrs.length; i++) {
		allTrs[i].classList.add('test');
	}
};

addTestClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function (height) {
	for (let i = 0; i < height; i++) {
		let toPrint = '';
		for (let j = 0; j < i + 1; j++) {
			toPrint += '*';
		}
		console.log(toPrint);
	}
};

console.log('Esercizio 27:');
console.log(halfTree(4));

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = function (height) {
	for (let i = 0; i < height; i++) {
		let stars = '*'.repeat(2 * i + 1);
		let spacesBefore = ' '.repeat(height - i - 1);
		console.log(spacesBefore + stars);
	}
};

console.log('Esercizio 28:');
console.log(tree(6));

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function (number) {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return 'Il numero non è primo';
		}
	}

	return 'Il numero è primo';
};

console.log('Esercizio 29: ' + isItPrime(19));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
