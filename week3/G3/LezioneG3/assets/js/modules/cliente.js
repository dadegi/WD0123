import { Contatto } from './contatto.js';

export class Cliente extends Contatto {
    constructor(_ragSoc, _email, _pIva, _numFatture) {
        super (_ragSoc, _email, _pIva)
        this.numFatture = _numFatture;
    }

    fatture() {
        return `Numero fatture nell'anno in corso: ${this.numFatture}`;
    }
}