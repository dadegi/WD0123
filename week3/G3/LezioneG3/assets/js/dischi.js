class Dischi {
    titolo;
    autore;
    anno;
    constructor(_titolo = '', _autore = '', _anno = 0) {
        this.titolo = _titolo;
        this.autore = _autore;
        this.anno = _anno;
    }

    stampa() {
        return `${this.titolo}, ${this.autore}, ${this.anno}`;
    }
}

var disco1 = new Dischi('The Dark Side of the Moon', 'Pink Floyd', 1973);
var disco2 = new Dischi('Tubular Bells', 'Mike Oldfield', 1976);
var disco3 = new Dischi('Selling England by the Pound', 'Genesis', 1974);

console.log(somma);

document.getElementById('lista').innerHTML = `<li>${disco1.stampa()}</li><li>${disco2.stampa()}</li><li>${disco3.stampa()}</li>`;