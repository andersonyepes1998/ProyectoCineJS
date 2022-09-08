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
let peliculas=[
    {
        nombre:"DC Liga De SúperMascotas",
        genero:"Animación",
        duracion:106,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula1.jpg?alt=media&token=a830cd0c-7540-40ab-bec5-b2c21393a140",
        sinopsis:"Cuando la Liga de la Justicia es capturada por Lex Luthor, el perro de Superman, Krypto, forma un equipo de mascotas de refugio a las que se les otorgan superpoderes: Un sabueso llamado Ace, que se vuelve superfuerte, un cerdo llamado PB, que puede crecer hasta alcanzar un tamaño gigante, una tortuga llamada Merton, que se vuelve superrápida, y una ardilla llamada Chip, adquiere poderes eléctricos.",
        clasificacion:"general",
        idioma: "En subtitulado",
        Director: "Jared Stern",
        Actores:["Kate McKinnon ", "Dwayne Johnson ", "Kevin Hart. "] 
    },
    {
        nombre:"Thor: Amor y Trueno",
        genero:"Aventura",
        duracion:119,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula2.png?alt=media&token=b8b9ff9c-e78b-49e7-acc6-e88032983e87",
        sinopsis:"La película encuentra a Thor (Chris Hemsworth) en un viaje diferente a todo lo que ha enfrentado: una búsqueda de paz interior. Pero su retiro es interrumpido por un asesino de la galaxia conocido como Gorr, el Carnicero de Dioses (Christian Bale), que busca la extinción de los dioses. Para combatir la amenaza, Thor solicita la ayuda del rey Valquiria (Tessa Thompson), Korg (Taika Waititi) y su ex novia Jane Foster (Natalie Portman), quien, para sorpresa de Thor, empuña inexplicablemente su martillo mágico, Mjolnir, como la Poderosa Thor. ",
        clasificacion:"+12",
        idioma: "En subtitulado",
        Director: "Anderson yepes ",
        Actores: "Chris Hemsworth, Natalie Portman, Taika Waititi"
    },
    {
        nombre:"El Teléfono Negro",
        genero:"Terror",
        duracion:107,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula3.png?alt=media&token=a7b3972c-c154-470d-8d86-0d3df1df90d9",
        sinopsis:"Finney Shaw es un niño tímido pero inteligente de 13 años que es secuestrado y atrapado en un sótano insonorizado por un asesino sádico. Cuando un teléfono desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voces de las víctimas anteriores del asesino. Y están decididos a asegurarse de que lo que les pasó a ellos no le pase a Finney.",
        clasificacion:"+15",
        idioma: "En subtitulado",
        Director: "Anderson yepes ",
        Actores: "Chris Hemsworth, Natalie Portman, Christian Bale"
    },
    {
        nombre:"Elvis",
        genero:"Drama",
        duracion:160,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/plicula4.png?alt=media&token=10d1944d-e0ed-40d5-b4e4-14d9b31f1e0e",
        sinopsis:"La película explora la vida y la música de Elvis Presley (Butler) a través del prisma de su complicada relación con el coronel Tom Parker (Hanks), su enigmático manager. La historia profundiza en la compleja dinámica que existía entre Presley y Parker que abarca más de 20 años, desde el ascenso de Presley a la fama hasta su estrellato sin precedentes, en el contexto de la revolución cultural y la pérdida de la inocencia en Estados Unidos. Y en el centro de ese periplo está Priscilla Presley (Olivia DeJonge), una de las personas más importantes e influyentes en la vida de Elvis.",
        clasificacion:"+12",
        idioma: "Es subtitulado",
        Director: "Valeria Moncada ",
        Actores: "Austin Butler, Tom Hanks, Dacre Montgomery"
    },
    {
        nombre:"Apocalypsis Zombie",
        genero:"Suspenso",
        duracion:180,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula%205.png?alt=media&token=907c477c-ec30-46c2-9767-eaca36bf07c1",
        sinopsis:"secuela de la cinta de culto WYRMWOOD: ROAD TO DEAD, se lleva a cabo en un desierto australiano infestado de zombies donde el soldado Rhys quien ha dedicado su vida a rastrear y capturar supervivientes para el Cirujano General, se une a otros científicos locos, soldados malvados y héroes con la esperanza de encontrar una cura para el virus que amenaza a toda la humanidad.",
        clasificacion:"+18",
        idioma: "En subtitulado",
        Director: "Euclidez Perez ",
        Actores: "Oris Erhuero, Mark Strange, Martyn Ford"
    },
    {
        nombre:"El Perro Samurai: La Leyenda de Kakamucho",
        genero:"Animacion",
        duracion:180,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula6.png?alt=media&token=441e8dc4-6cb1-45c8-b963-46f41dff2d4d",
        sinopsis:"Hank, un sabueso con mala suerte, se encuentra en un pueblo lleno de gatos que necesitan un héroe que los defienda de un despiadado villano que quiere borrar a su aldea del mapa. Con la ayuda de un maestro que no quiere entrenarlo, nuestro desvalido héroe debe asumir el papel del samurái del pueblo y unirse a los aldeanos para salvar el día. El Perro Samurái: La leyenda de Kakamucho, próximamente en cines. Con las voces de Juanpa Zurita como Hank, Faisy como Ika Chu y Karla Díaz como Emiko.",
        clasificacion:"general",
        idioma: "Es subtitulado",
        Director: "Andres mercado",
        Actores: "Samuel L. Jackson, Michael Cera, Mel Brooks"
    },
    {
        nombre:"Tren Bala",
        genero:"Acción, Thriller",
        duracion:126 ,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula7.jpg?alt=media&token=e9023645-6415-479d-89c0-f5230b625eab",
        sinopsis:"En Tren bala, Brad Pitt protagoniza la película en el papel de Ladybug, un asesino con poca suerte determinado a hacer su trabajo en paz después de que más de una de sus asignaciones se le han salido control. Sin embargo, el destino puede tener otros planes mientras que la última misión de Ladybug lo pone en un camino accidentado con adversarios mortales de diversas partes del planeta -todos conectados pero con objetivos en conflicto- en el tren más rápido del mundo…y tiene que descubrir como bajarse. Del director de Deadpool 2, David Leitch, el final del camino es sólo el comienzo de un viaje extremo sin parar a través de un Japón Moderno.",
        clasificacion:"general",
        idioma: "En subtitulado",
        Director: "Mathias yepes",
        Actores: "Brad Pitt, Joey King, David Leitch"
    },
    {
        nombre:"Todo en Todas Partes al Mismo Tiempo",
        genero:"Aventura",
        duracion:139,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicual8.jpg?alt=media&token=9209d2f9-19fc-4578-85a3-8df4daa50139",
        sinopsis:"Con su lavandería al borde del fracaso y su matrimonio con el debilucho esposo Waymond en las rocas, Evelyn Wang, con exceso de trabajo, lucha por hacer frente a todo, incluida una relación hecha jirones con su padre crítico Gong Gong y Joy, su hija. Y, como si enfrentarse a una lúgubre crisis de la mediana edad no fuera suficiente, Evelyn debe prepararse para una reunión desagradable con un burócrata impersonal: Deirdre, la auditora del IRS mal vestida.",
        clasificacion:"+12",
        idioma: "Es subtitulado",
        Director: "Johana Hernandez",
        Actores: "Michelle Yeoh, Stephanie Hsu, Dan Kwan"
    },
    {
        nombre:"Minions 2: Nace un Villano",
        genero:"Acción, Comedia",
        duracion:87,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Pelicula%209.jpg?alt=media&token=739ff7d0-f079-4d42-b5f4-be1ba0c1c37e",
        sinopsis:"En el corazón de los años 70´s, un Gru de 12 años crece en los suburbios. Fan de los supervillanos Vicious 6, Gru decide que quiere ser tan malvado como ellos para unírseles. Con ayuda de sus secuaces, los Minions, construye su primera guarida, usa sus primeras armas y cumple sus primeras misiones.",
        clasificacion:"En general",
        idioma: "En subtitulado",
        Director: "Daniela gutierrez",
        Actores: "Julie Andrews, Russell Brand, Michelle Yeoh"
    },
    {
        nombre:"Un Parcero en Nueva York",
        genero:"Comedia",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Pelicula%2010.png?alt=media&token=82dc19e7-45d0-4a8d-a1e5-d4641d44c2b5",
        sinopsis:"Armando Pulido, un maestro de obra sencillo de buen corazón, trabajador, rebuscador y buen amigo, cansado de la grave crisis económica que vive en Colombia, decide irse a buscar el sueño americano a Nueva York, para esto intentan diversas formas de conseguir la visa americana hasta que lo logra de la manera menos pensada posible, al llegar a la gran manzana el hombre se ve enfrentado a rebuscársela con todo el ingenio. Al final logrará su sueño americano, pero le hará falta todo lo maravilloso que tenía en Colombia.",
        clasificacion:"En general",
        idioma: "Es",
        Director: "Claudia Henao",
        Actores: "Carlos Hurtado Beltrán, Harold Trompetero,  Bayardo Ardila"
    }
]


//Recorriendo un arreglo con JS.


//es un metodo para recorrer solo arreglos

let fila=document.getElementById('fila');

peliculas.forEach(function(pelicula){
   
    console.log(pelicula.nombre);
    console.log(pelicula.genero);
    console.log(pelicula.duracion);
    console.log(pelicula.poster);
    console.log(pelicula.sinopsis);
    console.log(pelicula.clasificacion);
    console.log(pelicula.idioma);

    //TRAVERSING (CREAR ETIQUETAS DESDE HTML DESDE JS)
    //1. Creamos una columna para cada variable.

    let columna=document.createElement('div');
    columna.classList.add('col');

    let tarjeta=document.createElement('div');
    tarjeta.classList.add('card','h-100','shadow');

    //foto para cada pelicula

    let poster=document.createElement('img');
    poster.classList.add('card-img-top');
    poster.src=pelicula.poster;

    let nombrePelicula=document.createElement('h3');
    nombrePelicula.classList.add('Card-title','text-center','fw-bold');
    nombrePelicula.textContent=pelicula.nombre;

    let generoPelicula=document.createElement('h4');
    generoPelicula.classList.add('card-text');
    generoPelicula.textContent="Genero: "+pelicula.genero;

    let idioma = document.createElement('h6');
    idioma.classList.add('fw-bold');
    idioma.innerText=pelicula.idioma;

    let director = document.createElement('h6');
    director.classList.add('fw-bold');
    director.innerText= "Director: " +pelicula.Director;

    let actor = document.createElement('h6');
    actor.classList.add('fw-bold','text-center');
    actor.innerText= "ACTORES: " +pelicula.Actores;

    let sinopsis = document.createElement('p');
    //sinopsis.classList.add('d-none');
    sinopsis.textContent=pelicula.sinopsis;
    //padres e hijos

    tarjeta.appendChild(poster);
    tarjeta.appendChild(nombrePelicula);
    tarjeta.appendChild(generoPelicula);
    tarjeta.appendChild(director);
    tarjeta.appendChild(idioma);
    tarjeta.appendChild(sinopsis);
    tarjeta.appendChild(actor);


    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})

//DETETANDO SELECCION DE UNA PELICULA
fila.addEventListener('click',function(){
    alert('Estas seleccionando una pelicula');
})


let peliculas2=[
    {
        nombre:"BONNIE BEARS",
        genero:"Animación",
        duracion:98,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/BONNIE%20BEARS1.jpg?alt=media&token=bd858ddf-4cc9-45ae-b334-e0ee370e0d57",
        sinopsis:"Cuando un objeto desconocido procedente del Espacio aterriza en la Tierra, Bramble adquiere nuevas habilidades y un compañero extraterrestre llamado Avi. Poco a poco, Bramble se entera de que el pueblo de Avi, los Rhyot, es originario de la Tierra..",
        clasificacion:"general",
        idioma: "Es subtitulado",
        Director: "Marlon moreno",
        Actores:["Kate McKinnon ", "Dwayne Johnson ", "Kevin Hart. "] 
    },
    {
        nombre:"HACIA LA LUNA",
        genero:"Drama",
        duracion:76,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/HACIA%20LA%20LUNA.jpg?alt=media&token=247283ed-54dc-4c85-883f-ad385ad60e70",
        sinopsis:"Una oda cinematográfica a la luna tejida a partir de archivos, poesía y canciones: un paseo nocturno constantemente sorprendente a través de la imaginación a la luz de la luna. Estructurada como un ciclo lunar, esta obra se mueve entre historias de amor, canciones de anhelo.",
        clasificacion:"general",
        idioma: "Es subtitulado",
        Director: "Jonathan marin",
        Actores:["linda castro ", "Danovis vanguero ", "Aida merlano. "] 
    },
    {
        nombre:"LA CIUDAD DE LAS FIERAS",
        genero:"Drama",
        duracion:97,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/LA%20CIUDAD%20DE%20LAS%20FIERAS1.jpg?alt=media&token=3929f256-9d70-4236-9da6-9015c13edb28",
        sinopsis:"Tras la muerte de su madre, Tato, un joven amante del rap, se rehúsa a dejar Medellín para vivir en el campo con un abuelo que no sabía que tenía. Ante una ciudad que poco a poco revela una gran hostilidad, Tato ha encontrado en la música y en su pequeño grupo de amigos un refugio.",
        clasificacion:"general",
        idioma: "En subtitulado",
        Director: "Mario zapata",
        Actores:["Lorena Gonzales ", "Sury marcela ", "Anibal cañas. "] 
    },
    {
        nombre:"LA PASION SEGUN BERENICE",
        genero:"Drama",
        duracion:101,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/LA%20PASION%20SEGUN%20BERENICE.jpg?alt=media&token=25cf01da-2080-44f6-bdec-e9948a1ad651",
        sinopsis:"Berenice ha regresado a su pueblo natal después de que se marido falleció para cuidar a quien fungió como su madre. En el pueblo, se dedica a enseñar taquimecanografía. Allí no pasa nada salvo una esporádica proyección de cine y la asistencia puntual a misa todos los domingos.",
        clasificacion:"general",
        idioma: "Es subtitulado",
        Director: "Juan Jose sepulveda",
        Actores:["Ivan Yepes ", "Cielo posada ", "Linda ortiz. "] 
    },
    {
        nombre:"GALLO DE PELEA",
        genero:"Drama",
        duracion:103,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/gallo1.jpg?alt=media&token=46096b17-1b27-48c2-97f9-821e88439241",
        sinopsis:"A raíz del extraño asesinato de su hijo y después de afrontar muchos años en soledad desde el fallecimiento de su esposa, Gilberto, un humilde y silencioso cultivador, decide ponerle cara a su destino, inspirado por la valentía de un gallo de pelea que misteriosamente aparece en su vida.",
        clasificacion:"15 Años",
        idioma: "Es subtitulado",
        Director: "Jorge ordoñez",
        Actores:["Mario salinas ", "Carlos slim", "Gustavo Petro. "] 
    },
    {
        nombre:"ALBUM PARA LA JUVENTUD",
        genero:"Drama",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/ALBUM%20PARA%20LA%20JUVENTUD.jpg?alt=media&token=d78b89ab-c232-4ee9-9364-469f310fcc7d",
        sinopsis:"Pedro y Sol acaban de terminar su último año de colegio y comienzan sus vacaciones. Dedican su tiempo libre a abordar, poco a poco, tareas que quizás algún día se conviertan en sus profesiones. Sol usa sus lecciones de piano para revisar grabaciones musicales antiguas y prepara un examen para el conservatorio de música..",
        clasificacion:"12 Años",
        idioma: "Es subtitulado",
        Director: "Andres sepulveda",
        Actores:["Andres salinas ", "Cesar slim", "Diego pelaez. "] 
    },
]

let fila2=document.getElementById('fila2');

    peliculas2.forEach(function(peliculita){

        let columna2=document.createElement('div');
        columna2.classList.add('col');

        let cars=document.createElement('div');
        cars.classList.add('card','h-100','shadow');

        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=peliculita.poster;

        let nombPelicula=document.createElement('h3');
        nombPelicula.classList.add('Card-title','text-center','fw-bold');
        nombPelicula.textContent=peliculita.nombre;

        
        let generoPelicula=document.createElement('h4');
        generoPelicula.classList.add('card-text');
        generoPelicula.textContent="Genero: "+peliculita.genero;

        let idioma = document.createElement('h6');
        idioma.classList.add('fw-bold');
        idioma.innerText=peliculita.idioma;

        let director = document.createElement('h6');
        director.classList.add('fw-bold');
        director.innerText= "Director: " +peliculita.Director;

        let actor = document.createElement('h6');
        actor.classList.add('fw-bold','text-center');
        actor.innerText= "ACTORES: " +peliculita.Actores;

        let sinopsis = document.createElement('p');
        //sinopsis.classList.add('d-none');
        sinopsis.textContent=peliculita.sinopsis;

        
        cars.appendChild(poster);
        cars.appendChild(nombPelicula);
        cars.appendChild(generoPelicula);
        cars.appendChild(director);
        cars.appendChild(idioma);
        cars.appendChild(sinopsis);
        cars.appendChild(actor);

        columna2.appendChild(cars);
        fila2.appendChild(columna2);
    })






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