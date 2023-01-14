export function pintapeliculas2(peliculas2){
    let fila2=document.getElementById('fila2');

    peliculas2.forEach(function(pelicula){
        //TRAVERSING (CREAR ETIQUETAS HTML DESDE JS)
        
        //1. Creamos una columna para cada variable.

        let columna=document.createElement('div');
        columna.classList.add('col',);
    
        let tarjeta=document.createElement('div');
        tarjeta.classList.add('card','h-100','shadow');

        let imagen=document.createElement('img');
        imagen.classList.add('card-img-top');
        imagen.src=pelicula.poster;

        let nombrePelicula=document.createElement('h5');
        nombrePelicula.classList.add('Card-title','fw-bold');
        nombrePelicula.textContent=pelicula.nombre;

        let idiomasPelicula=document.createElement('p');
        idiomasPelicula.classList.add('idiomas');
        idiomasPelicula.innerText= "Idioma: "+pelicula.idioma;

        let Estreno = document.createElement('p');
        Estreno.classList.add('estrenos');
        Estreno.innerText="Estreno: " +pelicula.Estreno;

        let clasificacion = document.createElement('p');
        clasificacion.classList.add('text');
        clasificacion.innerText= "Recomendada para mayores de "+pelicula.clasificacion;

        let duracion = document.createElement('p');
        duracion.classList.add('text2');
        duracion.innerText= pelicula.duracion+ " Min";

        let sinopsis = document.createElement('p');
        sinopsis.classList.add('informacion');
        sinopsis.classList.add('d-none');
        sinopsis.innerText=pelicula.sinopsis;

        let generoPelicula=document.createElement('h6');
        generoPelicula.classList.add('card-text');
        generoPelicula.classList.add('d-none');
        generoPelicula.textContent=pelicula.genero;

        let director = document.createElement('h7');
        director.classList.add('fw-bold');
        director.classList.add('d-none');
        director.innerText=pelicula.Director;

        let actor = document.createElement('p');
        actor.classList.add('actores')
        actor.classList.add('fw-bold','text-center');
        actor.classList.add('d-none');
        actor.innerText=pelicula.Actores;

        let banner = document.createElement('img');
        banner.classList.add('d-none');
        banner.classList.add('banner2');
        banner.src = pelicula.Banner;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombrePelicula);
        tarjeta.appendChild(idiomasPelicula);
        tarjeta.appendChild(Estreno);
        tarjeta.appendChild(clasificacion);
        tarjeta.appendChild(duracion);
        tarjeta.appendChild(sinopsis);
        tarjeta.appendChild(generoPelicula);
        tarjeta.appendChild(director);
        tarjeta.appendChild(actor);
        tarjeta.appendChild(banner);

        columna.appendChild(tarjeta);
        fila2.appendChild(columna);
    })
}
    



/*

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
    fila2.appendChild(container);
    */