import { Contatto } from './modules/contatto.js';
import { Cliente } from './modules/cliente.js';
import { Fornitore } from './modules/fornitore.js';

var contatto1 = new Contatto('xyz', 'info@xyz.com', '03456897452');
var cliente1 = new Cliente('abc', 'info@abc.com', '02135687456', 25);
var fornitore1 = new Fornitore('logistic', 'info@logistic.com', '03265987451', 'camion');

document.getElementById('contatto').innerHTML = contatto1.stampa();
document.getElementById('cliente').innerHTML = `${cliente1.stampa()}, ${cliente1.fatture()}`;
document.getElementById('fornitore').innerHTML = `${fornitore1.stampa()}, ${fornitore1.trasporto()}`;