//PREGUNTADNO POR UN DATO QUE ESTA ALMACENADO EN MEMORIA

let datospeliculaseleccionada = JSON.parse(localStorage.getItem("peliculaSeleccionada"));

let poster=datospeliculaseleccionada.poster;
let nombre=datospeliculaseleccionada.nombre;
let genero=datospeliculaseleccionada.genero;
let idioma=datospeliculaseleccionada.idioma;
let nombclasificacionre=datospeliculaseleccionada.clasificacion;
let director=datospeliculaseleccionada.director;
let sinopsis=datospeliculaseleccionada.sinopsis;
let actor=datospeliculaseleccionada.actor;
let banner=datospeliculaseleccionada.banner;



//cargando datos
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

let bannerImg = document.querySelector('.banner2');
bannerImg.src=banner;