// Ricevere attraverso un form il nome e l'anno di nascita di una persona, verificare se la persona è maggiorenne o minorenne e salutarla indicando la maggiore o minore età

/*
COMPITI
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE L'ETÀ
4. VERIFICARE LA MAGGIORE O MINORE ETÀ
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM

EVENTO SCATENANTE
Click

VARIABILI GLOBALI
const btn
eta
stato
*/

const btn = document.getElementById('verifica');
var eta; // globale in quanto valorizzata per calcolare l'età e utilizzata dalla verifica e dalla stampa
var stato; // globale in quanto valorizzata dalla verifica e utilizzata dalla stampa

btn.addEventListener('click', function() {
    let nome = document.getElementById('nome');
    let anno = document.getElementById('eta');

    calcolaEta(anno.value);
    verifica();
    scrivi(nome.value);
    cancellaForm(nome, anno);
});

function calcolaEta(anno) {
    eta = 2023 - anno; // valorizzazione della variabile globale eta
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne'; // uso la variabile globale eta e valorizzo la variabile globale stato
}

function scrivi(nome) {
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome + ' 😊';
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato; // uso le due variabili globali per scriverle nell'HTML
}

function cancellaForm(nome, anno) {
    nome.value = '';
    anno.value = '';
}