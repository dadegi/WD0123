class Utente {
    constructor(_nome, _cognome, _eta) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
    }

    stampa() {
        return `${this.nome} ${this.cognome}, ${this.eta}`;
    }
}

class Studente extends Utente {
    constructor(_nome, _cognome, _eta, _corsi = []) {
        super (_nome, _cognome, _eta)
        this.corsi = _corsi;
    }

    corsiStudente() {
        return `${this.corsi}`;
    }
}

class Docente extends Utente {
    skills = [];

    skillsDocente() {
        return `${this.skills}`;
    }
}

var utente1 = new Utente('Mario', 'Rossi', 28);
var studente1 = new Studente('Nicola', 'Bianchi', 25, ['HTML', 'CSS', 'Javascript']); // Array definito direttamente nlla definizione dell'istanza in quanto presente nel constructor della sottoclasse
var docente1 = new Docente('Giuseppe', 'Verdi', 45);
docente1.skills = ['Web Development', 'OOP']; // Array definito dopo la definizione dell'istanza in quanto non presente nel constructor della sottoclasse

document.getElementById('utente').innerHTML = `Utente semplice: ${utente1.stampa()}`;
document.getElementById('studente').innerHTML = `Studente: ${studente1.stampa()} / Corsi frequentati: ${studente1.corsiStudente()}`;
document.getElementById('docente').innerHTML = `Docente: ${docente1.stampa()} / Materie insegnate: ${docente1.skillsDocente()}`;