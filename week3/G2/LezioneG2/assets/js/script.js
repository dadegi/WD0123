var btnVerifica = document.getElementById('verifica');
var btnReset = document.getElementById('reset');
var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
var valore1;
var valore2;
var messaggio = document.getElementById('risultato');
var estratto;

window.addEventListener('load', function() {
    btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
});

btnVerifica.addEventListener('click', function() {
    valore1 = giocatore1.value;
    valore2 = giocatore2.value;
    verifica();
});

function verifica() {
    if (!valore1 || !valore2) {
        messaggio.innerHTML = 'Attenzione! Entrambi i giocatori devono inserire un valore!';
        return;
    } else if (Number(valore1) == 0 || Number(valore2) == 0 || Number(valore1) > 100 || Number(valore2) > 100) {
        messaggio.innerHTML = 'Attenzione! Inserire un valore numerico tra 1 e 100!';
        return;
    } else if (Number(valore1) == Number(valore2)) {
        messaggio.innerHTML = 'Attenzione! I due giocatori devono inserire valori diversi!';
        return;
    } else {
        estrai();
        calcola();
    }
}

function estrai() {
    estratto = Math.floor((Math.random() * 100) + 1);
}

function calcola() {
    btnReset.removeAttribute('disabled');
    btnReset.style.backgroundColor = 'green';
    giocatore1.setAttribute('disabled', 'true');
    giocatore1.style.backgroundColor = 'gray';
    giocatore2.setAttribute('disabled', 'true');
    giocatore2.style.backgroundColor = 'gray';

    document.getElementById('estratto').innerHTML = `Numero estratto: ${estratto}`;

    // if (Number(valore1) == estratto) {
    //     messaggio.innerHTML = 'Il giocatore 1 ha indovinato!';
    // } else if (Number(valore2) == estratto) {
    //     messaggio.innerHTML = 'Il giocatore 2 ha indovinato!';
    // } else if (Math.abs((estratto - Number(valore1))) < Math.abs((estratto - Number(valore2)))) {
    //     messaggio.innerHTML = 'Nessuno ha vinto, ma il giocatore 1 si è avvicinato di più';
    // } else if (Math.abs((estratto - Number(valore2))) < Math.abs((estratto - Number(valore1)))) {
    //     messaggio.innerHTML = 'Nessuno ha vinto, ma il giocatore 2 si è avvicinato di più';
    // } else {
    //     messaggio.innerHTML = 'Pareggio!';
    // }

    switch (true) {
		case Number(valore1) == estratto:
			messaggio.innerHTML = 'Il giocatore 1 ha indovinato!';
			break;

		case Number(valore2) == estratto:
			messaggio.innerHTML = 'Il giocatore 2 ha indovinato!';
			break;

		case Math.abs(estratto - Number(valore1)) <	Math.abs(estratto - Number(valore2)):
			messaggio.innerHTML =
				'Nessuno ha vinto, ma il giocatore 1 si è avvicinato di più';
			break;

		case Math.abs(estratto - Number(valore2)) <	Math.abs(estratto - Number(valore1)):
			messaggio.innerHTML =
				'Nessuno ha vinto, ma il giocatore 2 si è avvicinato di più';
			break;

		default:
			messaggio.innerHTML = 'Pareggio!';
			break;
	}

    btnVerifica.setAttribute('disabled', 'true');
    btnVerifica.style.backgroundColor = 'red';
}

btnReset.addEventListener('click', function() {
    btnVerifica.removeAttribute('disabled');
    btnVerifica.removeAttribute('style');
    giocatore1.removeAttribute('disabled');
    giocatore2.removeAttribute('disabled');
    document.getElementById('giocatore1').value = '';
    document.getElementById('giocatore2').value = '';
    document.getElementById('estratto').value = '';
    messaggio.innerHTML = '';
    document.getElementById('estratto').innerHTML = '';
    btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
});