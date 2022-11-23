import {comidas} from '../helper/baseDatosComida.js';
import {pintarCrispetas} from '../helper/pintarComidas.js';

pintarCrispetas(comidas);

let fila5=document.getElementById('fila5');

let peliculasComidas={}

fila5.addEventListener('click', function(evento){
    peliculasComidas.valorComida=(evento.target.parentElement.querySelector('p').textContent);
    peliculasComidas.valorCombo=(evento.target.parentElement.querySelector('p').textContent);
    alert("Se agrego al pedido");
})





import {combos} from '../helper/baseDatosComida.js';
import {pintarCombos} from '../helper/pintarComidas.js';

pintarCombos(combos);

let fila6 = document.getElementById('fila6');

let peliculasCombos={}

fila6.addEventListener('click', function(evento){
    peliculasCombos.valorCombo=(evento.target.parentElement.querySelector('p').textContent);
    alert("Se agrego al pedido");
})







import {bebidas} from '../helper/baseDatosComida.js';
import {pintarBebidas} from '../helper/pintarComidas.js';

pintarBebidas(bebidas);

let fila7 = document.getElementById('fila7');

let peliculasBebidas={}

fila7.addEventListener('click', function(evento){
    peliculasBebidas.valorCombo=(evento.target.parentElement.querySelector('p').textContent);
    alert("Se agrego al pedido");
})
