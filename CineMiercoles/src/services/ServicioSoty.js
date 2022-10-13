//1 = URI

const URI = "https://api.spotify.com/v1/artists/3OcvS8PzSGYMBvLdzY6g3e/top-tracks?market=US";

//2.token

const TOKEN = "Bearer BQCT8IUv6owGYhFctv0aLZG_GtqbyCKOithZcd52adP_OtiEYdndtz9jktX6I-Yb8GgkdQHeL0DJ1rXXNKQATBo904U1SfNVPNU8fFZ9mltkXXkt9jjalkxAga7eHRvYWHMFAIY7Li8EeBrYsN4loNhFJKN2l7lG06hgzYrWKldYsSHvlfqgZ0P45ZAWMaQqCtY";

//3.PETICION

const PETICION = {
    method:"GET",
    headers:{Authorization:TOKEN}
}

let fila=document.getElementById('fila');

//4. Usamos la promesa FETCH para conumir el api.

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json();
})
.then(function(respuesta){
    let canciones=respuesta.tracks;
    canciones.forEach(function(cancion){
        console.log(cancion.name);
        console.log(cancion.preview_url);

        let columna = document.createElement('div');
        columna.classList.add('col');

        let tarjeta=document.createElement('div');
        tarjeta.classList.add('card','h-100');

        let audio=document.createElement('audio');
        audio.setAttribute('controls','controls');
        audio.src=cancion.preview_url;

        let h1=document.createElement('h3');
        h1.classList.add('text-center');
        h1.innerText=cancion.name;

        tarjeta.appendChild(h1);
        tarjeta.appendChild(audio);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);

    })
})
.catch(function(error){
    console.log(error)
})