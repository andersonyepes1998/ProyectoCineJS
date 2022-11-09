export function pintapeliculas2(peliculas2){
    let fila2=document.getElementById('fila2');

    peliculas2.forEach(function(pelicula){
        //TRAVERSING (CREAR ETIQUETAS HTML DESDE JS)
        
        //1. Creamos una columna para cada variable.

        let columna=document.createElement('div');
        columna.classList.add('col',);
    
        let tarjeta=document.createElement('div');
        tarjeta.classList.add('card','h-100','shadow');

        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=pelicula.poster;

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

        tarjeta.appendChild(poster);
        tarjeta.appendChild(nombrePelicula);
        tarjeta.appendChild(idiomasPelicula);
        tarjeta.appendChild(Estreno);
        tarjeta.appendChild(clasificacion);
        tarjeta.appendChild(duracion);

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