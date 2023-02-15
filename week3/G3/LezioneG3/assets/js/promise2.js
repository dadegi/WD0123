attendiPromise(); // Chiamata alla funzione che chiama la promise

function funzionePromise() { // Funzione di tipo promise: in tre secondi genera cinque numeri che devono rispondere a un criterio per essere validi, altrimenti generano un errore
	return new Promise((res, rej) => {
		setTimeout(() => {
		var numero = Math.random();
		numero > 0.5
			? res(numero)
			: rej(
					'Il risultato non rientra nel range indicato. Numero generato: ' +
						numero
			  );
		}, 3000);
	});
}

function attendiPromise() { // Funzione che chiama la promise e restituisce un messaggio in caso di risposta e uno in caso di errore
	for (let i = 0; i < 5; i++) {
		funzionePromise()
			.then((numero) => console.log('Numero generato: ' + numero))
			.catch((errore) => console.log('Attenzione: ' + errore));
	}
}

scrivi(); // Funzione eseguita al caricamento della pagina indipendentemente dalla promise

function scrivi() {
	console.log('Ciao');
}

let timer  = 1;
let avviaTimer = setInterval(() => {
    if (timer < 11) {
        console.log(timer);
    timer++;
    } else {
        clearInterval(avviaTimer);
    }
}, 1500);

avviaTimer; // Timer eseguito al caricamento della pagina indipendentemente dalla promise, che viene eseguito sia prima dell'esecuzione della promise che dopo la sua risposta, avendo un tempo di attesa inferiore