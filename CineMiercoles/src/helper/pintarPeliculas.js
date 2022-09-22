export function pintarPeliculas(peliculas){
    let fila=document.getElementById('fila');

    peliculas.forEach(function(pelicula){
    
        //TRAVERSING (CREAR ETIQUETAS DESDE HTML DESDE JS)
        
        //1. Creamos una columna para cada variable.
    
        let columna=document.createElement('div');
        columna.classList.add('col',);
    
        let tarjeta=document.createElement('div');
        tarjeta.classList.add('card','h-100','shadow');
    
    
        //foto para cada pelicula
    
        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=pelicula.poster;
    
        let nombrePelicula=document.createElement('h5');
        nombrePelicula.classList.add('Card-title','fw-bold');
        nombrePelicula.textContent=pelicula.nombre;
    
        let generoPelicula=document.createElement('h6');
        generoPelicula.classList.add('card-text');
        generoPelicula.textContent="Genero: "+pelicula.genero;
    
        let idioma = document.createElement('h3');
        idioma.innerText= "Idioma: "+pelicula.idioma;
    
        let clasificacion = document.createElement('p');
        clasificacion.classList.add('text');
        clasificacion.innerText= "Recomendada para "+pelicula.clasificacion;
    
        let duracion = document.createElement('p');
        duracion.classList.add('text2');
        duracion.innerText= pelicula.duracion+ " Min";
    
        let director = document.createElement('h7');
        director.classList.add('fw-bold');
        director.classList.add('d-none');
        director.innerText= "Director: " +pelicula.Director;
    
        let actor = document.createElement('p');
        actor.classList.add('actores')
        actor.classList.add('fw-bold','text-center');
        actor.classList.add('d-none');
        actor.innerText= "ACTORES: " +pelicula.Actores;
    
        let sinopsis = document.createElement('p');
        sinopsis.classList.add('informacion');
        sinopsis.classList.add('d-none');
        sinopsis.textContent=pelicula.sinopsis;
        //padres e hijos
    
        tarjeta.appendChild(poster);
        tarjeta.appendChild(nombrePelicula);
        tarjeta.appendChild(generoPelicula);
        tarjeta.appendChild(idioma);
        tarjeta.appendChild(clasificacion);
        tarjeta.appendChild(duracion);
        tarjeta.appendChild(director);
        tarjeta.appendChild(sinopsis);
        tarjeta.appendChild(actor);
    
    
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    })
}