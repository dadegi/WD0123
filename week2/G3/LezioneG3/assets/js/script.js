// Oggetto primitivo
const mioOggetto = {
    nome: 'Dario',
    cognome: 'Del Giudice',
    eta: 0,
    patente: true,

    calcolaEta: function (anno) {
        // metodo funzionale, fa qualcosa
        this.eta = 2023 - anno;
    },

    stampa: function () {
        // metodo operativo, restituisce qualcosa (eventualmente dopo aver fatto qualcos'altro), hanno sempre un return
        return (
            `${this.nome} ${this.cognome} di anni ${this.eta}; in possesso di patente? ${this.patente}`
        );
    },
};

document.getElementById('calcola').addEventListener('click', function () {
    let anno = document.getElementById('anno').value;
    mioOggetto.calcolaEta(anno);
    scrivi();
});

function scrivi() {
    document.getElementById('oggetto').innerHTML = mioOggetto.stampa();
}

// Costruttore
function Studente(_nome, _cognome, _corso) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.corso = _corso;

    this.stampa = function () {
        return this.nome + ' ' + this.cognome + ' ' + this.corso;
    };
}

const umberto = new Studente('Umberto', 'Barera', 'WD0123');
const vincenzo = new Studente('Vincenzo', 'De Vito', 'WD0123');
const valerio = new Studente('Valerio', 'Tiso', 'WD0123');

const miaData = new Date(1967,09,20);
console.log(miaData);

document.getElementById('studenti').innerHTML =
    umberto.stampa() + ', ' + vincenzo.stampa() + ', ' + valerio.stampa();

//ARRAY
var array1 = [
    '1',
    2,
    {
        nome: 'Dario',
        cognome: 'Del Giudice',
    },
];

document.getElementById('array').innerHTML =
    array1[0] +
    ', ' +
    array1[1] +
    ', ' +
    array1[2].nome +
    ', ' +
    array1[2].cognome;

var array2 = ['Mario', 'Aldo', 'Maria', 'Nicola'];
document.getElementById('arrayNonOrdinato').innerHTML = array2;

array2.sort();
document.getElementById('arrayOrdinato').innerHTML += array2;

array2.pop();
document.getElementById('array4').innerHTML += array2;

array2.push('Giovanna', 'Francesco');
document.getElementById('array5').innerHTML += array2;

array2.shift();
document.getElementById('array6').innerHTML += array2;

array2.unshift('Fabrizio', 'Stefano');
document.getElementById('array7').innerHTML += array2;

delete array2[3];
document.getElementById('array8').innerHTML += array2;

array2.splice(3, 1);
document.getElementById('array9').innerHTML += array2;

array2.splice(0, 2);
document.getElementById('array10').innerHTML += array2;

array2.splice(1, 1, 'Anna');
document.getElementById('array11').innerHTML += array2;

array2.splice(1, 1, 'Nicola', 'Aldo', 'Giovanna');
document.getElementById('array12').innerHTML += array2;

array2.splice(2, 0, 'Sabrina');
document.getElementById('array13').innerHTML += array2;

// IF-ELSE IF-ELSE

var numero1 = 10;
var numero2 = 10;

if (numero1 > numero2) {
    document.getElementById('condizione').innerHTML = `${numero1} è maggiore di ${numero2}`;
} else if (numero1 < numero2) {
    document.getElementById('condizione').innerHTML = `${numero2} è maggiore di ${numero1}`;
} else {
    document.getElementById('condizione').innerHTML = 'I due numeri sono uguali';
}
