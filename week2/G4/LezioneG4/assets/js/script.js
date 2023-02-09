var btnCalcola = document.getElementById('calcola');
var btnReset = document.getElementById('reset');
var operazione;
var numero1;
var numero2;
var risultato;

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
