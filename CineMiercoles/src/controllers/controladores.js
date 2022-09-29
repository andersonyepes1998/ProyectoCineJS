//Declarando arreglos en JS

//Un ARREGLO ES UNA VARIABLE ESPECIAL QUE ME PERMITE ALMACENAR MULTIPLES DATOS EN UNA SOLA VARIABLE
/*
let numeros=[5,8,10];
console.log(numeros[1]);


//de esta forma orientada a objetos
let nombres=Array("juan","sara","carlos","laura");


//un objeto es una variable especial, QUE ME PERMITE ALMACENAR MULTIPLES DATOS EN UNA SOLA VARIABLE
let persona = {
    nombe:"anderson",
    profesion:"Ingeniero",
    edad:24,
    hinchaPoderoso:true,
    materiasDictadas:["web2","avanzados","nuevas tecnologias"],
    equiposFavoritas:["nacional","medelli"],
    comida:{
        nombre:"bandejaPaisa",
        precio:30000
    }
}
console.log(persona.materiasDictadas[1]);
*/
/*
const container = document.querySelector('.container mt-5');
const pelicula = [];
*/

import{peliculas} from "../helper/baseDatos.js"

import{pintarPeliculas} from "../helper/pintarPeliculas.js"
//llamo a la funcion pintarPeliculas
pintarPeliculas(peliculas)



let fila=document.getElementById('fila');

//DETETANDO SELECCION DE UNA PELICULA

let peliculaSeleccionada={}
fila.addEventListener('click',function(evento){

    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src);
    peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector('h5').textContent);//nombre de pelicula
    peliculaSeleccionada.genero=(evento.target.parentElement.querySelector('h6').textContent);//genero
    peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector('.idiomas').textContent);//idioma
    peliculaSeleccionada.clasificacion=(evento.target.parentElement.querySelector('p').textContent);//clasificacion
    peliculaSeleccionada.director=(evento.target.parentElement.querySelector('h7').textContent);//director
    peliculaSeleccionada.sinopsis=(evento.target.parentElement.querySelector('.informacion').textContent);//director
    peliculaSeleccionada.actor=(evento.target.parentElement.querySelector('.actores').textContent);//director
    peliculaSeleccionada.banner=(evento.target.parentElement.querySelector('.banner2').src);//banner

    console.log(peliculaSeleccionada);

    //llamando a la memoria del navegador
    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))

    window.location.href="./src/views/ampliarInfoPelicula.html";

})


import{peliculas2} from "../helper/baseDatosNueva.js"

let fila2=document.getElementById('fila2');






/*
  for(peliculas of pelicula){


    const rowjustify = document.createElement('div');
    rowjustify.classList.add('row justify-content-center');

    const col4 = document.createElement('div');
    col4.classList.add('col-4');

    const cardShadow = document.createElement('div');
    cardShadow.classList.add('card shadow');

    const img = document.createElement('img');
    img.setAttribute('src', pelicula.poster);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const peliculanombre = document.createElement('h1');
    peliculanombre.innerText = pelicula.nombre;

    const peliculaSinopsis = document.createElement('p');
    peliculaSinopsis.innerText = pelicula.sinopsis;


    cardBody.appendChild(peliculanombre);
    cardBody.appendChild(peliculaSinopsis);

    cardShadow.appendChild(img);
    cardShadow.appendChild(cardBody)

    col4.appendChild(cardShadow);
    rowjustify.appendChild(col4);

    container.appendChild(rowjustify);

  }*/
 