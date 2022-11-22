export function pintarpeliculas3(peliculas3){
    let fila3 = document.getElementById('fila3');

    peliculas3.forEach(function(pelicula){
        let columna=document.createElement('div');
        columna.classList.add('col');

        let tarjeta=document.createElement('div');
        tarjeta.classList.add('card','h-100','shadow');

        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=pelicula.poster;

        let nombrePelicula=document.createElement('h5');
        nombrePelicula.classList.add('Card-title','fw-bold');
        nombrePelicula.textContent=pelicula.nombre;

        let estreno=document.createElement('p');
        estreno.innerText="Estreno: " +pelicula.Estreno;

        let genero=document.createElement('p');
        genero.innerText="Género: " +pelicula.genero

        tarjeta.appendChild(poster);
        tarjeta.appendChild(nombrePelicula);
        tarjeta.appendChild(estreno);
        tarjeta.appendChild(genero);

        columna.appendChild(tarjeta);
        fila3.appendChild(columna);
    })
}



export function pintarBanner(banners){
    let fila4 = document.getElementById('fila4');

    banners.forEach(function(banner){
        let columna=document.createElement('div');
        columna.classList.add('col');

        let tarjetaCard=document.createElement('div');
        tarjetaCard.classList.add('card','h-100','shadow');

        let nombreBanner=document.createElement('h5');
        nombreBanner.classList.add('fw-bold');
        nombreBanner.innerText=banner.titulo;

        
        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=banner.poster;
 
        tarjetaCard.appendChild(nombreBanner);
        tarjetaCard.appendChild(poster);

        columna.appendChild(tarjetaCard);
        fila4.appendChild(tarjetaCard);
    })
}