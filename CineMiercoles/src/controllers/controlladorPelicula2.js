import{peliculas2} from "../helper/baseDatosNueva.js";
import{pintapeliculas2} from"../helper/pintapeliculas2.js";

pintapeliculas2(peliculas2);

let fila2=document.getElementById('fila2');

//EN ESTE MOMENTO EMPEZAMOS A DAR EL EVENTO CLICK A LAS PELICULAS...

let peliculasSeleccionadas2={}

fila2.addEventListener('click', function(e){

    //peliculasSeleccionadas2.imagen(e.target.parentElement.querySelector('img').src);
    peliculasSeleccionadas2.nombre=(e.target.parentElement.querySelector('h5').textContent);//nombre de pelicula
    peliculasSeleccionadas2.genero=(e.target.parentElement.querySelector('h6').textContent);//genero
    peliculasSeleccionadas2.idioma=(e.target.parentElement.querySelector('.idiomas').textContent);//idioma
    peliculasSeleccionadas2.clasificacion=(e.target.parentElement.querySelector('p').textContent);//clasificacion
    peliculasSeleccionadas2.director=(e.target.parentElement.querySelector('h7').textContent);//director
    peliculasSeleccionadas2.sinopsis=(e.target.parentElement.querySelector('.informacion').textContent);//director
    peliculasSeleccionadas2.actor=(e.target.parentElement.querySelector('.actores').textContent);//director
    peliculasSeleccionadas2.banner=(e.target.parentElement.querySelector('.banner2').src);//banner

    localStorage.setItem("peliculasSeleccionadas2",JSON.stringify(peliculasSeleccionadas2));

    window.location.href="./src/views/ampliarInfoPelicula2.html";

})


let datospeliculaseleccionada2 = JSON.parse(localStorage.getItem("peliculasSeleccionadas2"));

//let poster=datospeliculaseleccionada2.imagen;
let nombre=datospeliculaseleccionada2.nombre;
let genero=datospeliculaseleccionada2.genero;
let idioma=datospeliculaseleccionada2.idioma;
let nombclasificacionre=datospeliculaseleccionada2.clasificacion;
let director=datospeliculaseleccionada2.director;
let sinopsis=datospeliculaseleccionada2.sinopsis;
let actor=datospeliculaseleccionada2.actor;
let banner=datospeliculaseleccionada2.banner;

let foto = document.getElementById('foto');
foto.src=poster;

let titulo = document.getElementById('titulo');
titulo.textContent=nombre;

let genero2 = document.getElementById('genero2');
genero2.textContent=genero;

let texto = document.getElementById('texto');
texto.innerText=sinopsis;

let jefe = document.getElementById('jefe');
jefe.innerText=director;

let personaje = document.getElementById('personaje');
personaje.textContent=actor;

let bannerImg = document.getElementById('banner2');
bannerImg.src=banner;
