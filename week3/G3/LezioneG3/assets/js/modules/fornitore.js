import { Contatto } from './contatto.js';

export class Fornitore extends Contatto {
    constructor(_ragSoc, _email, _pIva, _mezzo) {
        super (_ragSoc, _email, _pIva)
        this.mezzo = _mezzo;
    }

    trasporto() {
        return `Tipo di trasporto effettuato: ${this.mezzo}`;
    }
}