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

let bannerImg = document.getElementById('banner2');
bannerImg.src=banner;


const comerciales2 = document.getElementById('comerciales2');
const flecha = document.getElementById('flecha');

flecha.addEventListener('click', toggleComerciales);

function toggleComerciales(){
    comerciales2.classList.toggle('inactive');
}

const comerciales3 = document.getElementById('comerciales3');
const flecha2 = document.getElementById('flecha2');

flecha2.addEventListener('click', toggleComerciales2);

function toggleComerciales2(){
    comerciales3.classList.toggle('inactive');
}

const comerciales4 = document.getElementById('comerciales4');
const flecha3 = document.getElementById('flecha3');

flecha3.addEventListener('click', toggleComerciales3);

function toggleComerciales3(){
    comerciales4.classList.toggle('inactive');
}

const comerciales5 = document.getElementById('comerciales5');
const flecha4 = document.getElementById('flecha4');

flecha4.addEventListener('click', toggleComerciales4);

function toggleComerciales4(){
    comerciales5.classList.toggle('inactive');
}

const comerciales6 = document.getElementById('comerciales6');
const flecha5 = document.getElementById('flecha5');

flecha5.addEventListener('click', toggleComerciales5);

function toggleComerciales5(){
    comerciales6.classList.toggle('inactive');
}

const comerciales7 = document.getElementById('comerciales7');
const flecha6 = document.getElementById('flecha6');

flecha6.addEventListener('click', toggleComerciales6);

function toggleComerciales6(){
    comerciales7.classList.toggle('inactive');
}