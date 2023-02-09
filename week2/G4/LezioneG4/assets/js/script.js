var btnCalcola = document.getElementById('calcola');
var btnReset = document.getElementById('reset');
var operazione;
var numero1;
var numero2;
var risultato;
var arrayStudenti = [];

window.addEventListener('load', init);

function init() {
    leggi();
    if (arrayStudenti != []) {
        lista();
    }
}

btnCalcola.addEventListener('click', function () {
	operazione = document.getElementById('operazione').value;
	numero1 = document.getElementById('numero1').value;
	numero2 = document.getElementById('numero2').value;
	if (!controlla()) {
		return;
	}
	calcola();
    scrivi();
});

function controlla() {
	if (operazione == '' || numero1 == '' || numero2 == '') {
		document.getElementById('risultato').innerHTML =
			"Attenzione! Compilare tutti i campi e scegliere un'operazione!";
		return false;
	} else {
		return true;
	}
}

function calcola() {
    numero1 = Number(numero1);
    numero2 = Number(numero2);

	switch (operazione) {
		case 'addizione':
			risultato = numero1 + numero2;
			break;
		case 'sottrazione':
			risultato = numero1 - numero2;
			break;
		case 'moltiplicazione':
			risultato = numero1 * numero2;
			break;
		case 'divisione':
			risultato = numero1 / numero2;
			break;
		default:
			risultato = 0;
			break;
	}
}

function scrivi() {
    document.getElementById('risultato').innerHTML = `Il risultato della ${operazione} tra ${numero1} e ${numero2} è ${risultato}`;
}

btnReset.addEventListener('click', function() {
    document.getElementById('risultato').innerHTML = '';
});

// Ciclo FOR
function leggi() {
    if (localStorage.getItem('elenco')) {
        arrayStudenti = localStorage.getItem('elenco').split(',');
    }
}

document.getElementById('aggiungi').addEventListener('click', function() {
    let nuovo = document.getElementById('nuovo').value;
    if (nuovo == '') {
        return
    } else {
        arrayStudenti.push(nuovo);
        localStorage.setItem('elenco', arrayStudenti);
        lista();
        document.getElementById('nuovo').value = '';
    }
})

function lista() {
    document.getElementById('cicloFor').innerHTML = '';
    for (let i = 0; i < arrayStudenti.length; i++) {
        document.getElementById('cicloFor').innerHTML += `<h3>Studente ${i + 1}: ${arrayStudenti[i]}</h3>`;
    }
}