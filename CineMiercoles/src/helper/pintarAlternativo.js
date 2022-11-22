export function pintarpeliculas3(peliculas3){
    let fila3 = document.getElementById('fila3');

    peliculas3.forEach(function(pelicula){
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

        tarjeta.appendChild(poster);
        tarjeta.appendChild(nombrePelicula);

        columna.appendChild(tarjeta);
        fila3.appendChild(columna);
    })
}