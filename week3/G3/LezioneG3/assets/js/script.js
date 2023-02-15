class Voce {
	constructor(_nomeVoce) {
		this.nomeVoce = _nomeVoce;
	}
	voceInserita() {
		return `<b>${this.nomeVoce}</b>`;
	}
}

let lista = document.querySelector('#lista');
let nuovaVoce = document.querySelector('#nuovaVoce');
let aggiungi = document.querySelector('#aggiungi');

let elenco = [];

aggiungi.addEventListener('click', () => {
	if (nuovaVoce.value) {
		let voceNuova = new Voce(nuovaVoce.value);
		elenco.push(voceNuova);
		console.log(elenco);
		scriviLista();
        scriviVoce();
	} else {
		document.getElementById('errore').innerHTML =
			'Scrivere una voce nel campo di input';
		return;
	}
});

function scriviLista() { // Utilizza la prima istanza di classe per stampare la lista
	lista.innerHTML = '';
    document.getElementById('errore').innerHTML = '';
	elenco.forEach((el, index) => {
		lista.innerHTML += `<li>${el.voceInserita()}</li>`;
	});
}

function scriviVoce() { // Utilizza la seconda istanza di classe per stampare il valore del campo di input min modo isolato
	let nuovaVoce2 = new Voce(nuovaVoce.value);
	document.getElementById('voceEsterna').innerHTML = `Questa voce, <b>${nuovaVoce2.voceInserita()}</b>, è inserita sia nell'array che nel DOM, in modo isolato`;
    nuovaVoce.value = '';
}
