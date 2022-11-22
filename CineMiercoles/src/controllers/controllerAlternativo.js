import {peliculas3} from '../helper/baseDatosAlternativo.js';
import {pintarpeliculas3} from '../helper/pintarAlternativo.js';

pintarpeliculas3(peliculas3);

let fila3=document.getElementById('fila3');

let peliculasAlternativas={}
fila3.addEventListener('click', function(evento){
    peliculasAlternativas.poster=(evento.target.parentElement.querySelector('img').src);
   alert("Aun no esta disponibles al publico.")
})




import {banners} from '../helper/baseDatosAlternativo.js';
import {pintarBanner} from '../helper/pintarAlternativo.js';

pintarBanner(banners);
let fila4=document.getElementById('fila4');