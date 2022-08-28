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

const container = document.querySelector('.container mt-5');
const pelicula = [];
let peliculas=[
    {
        nombre:"DC Liga De SúperMascotas",
        genero:"Animación",
        duracion:106,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula1.jpg?alt=media&token=a830cd0c-7540-40ab-bec5-b2c21393a140",
        sinopsis:"Cuando la Liga de la Justicia es capturada por Lex Luthor, el perro de Superman, Krypto, forma un equipo de mascotas de refugio a las que se les otorgan superpoderes: Un sabueso llamado Ace, que se vuelve superfuerte, un cerdo llamado PB, que puede crecer hasta alcanzar un tamaño gigante, una tortuga llamada Merton, que se vuelve superrápida, y una ardilla llamada Chip, adquiere poderes eléctricos.",
        clasificacion:"general",
        idioma: "En subtitulado"
    },
    {
        nombre:"Thor: Amor y Trueno",
        genero:"Aventura",
        duracion:119,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula2.png?alt=media&token=b8b9ff9c-e78b-49e7-acc6-e88032983e87",
        sinopsis:"La película encuentra a Thor (Chris Hemsworth) en un viaje diferente a todo lo que ha enfrentado: una búsqueda de paz interior. Pero su retiro es interrumpido por un asesino de la galaxia conocido como Gorr, el Carnicero de Dioses (Christian Bale), que busca la extinción de los dioses. Para combatir la amenaza, Thor solicita la ayuda del rey Valquiria (Tessa Thompson), Korg (Taika Waititi) y su ex novia Jane Foster (Natalie Portman), quien, para sorpresa de Thor, empuña inexplicablemente su martillo mágico, Mjolnir, como la Poderosa Thor. ",
        clasificacion:"+12",
        idioma: "En subtitulado"
    },
    {
        nombre:"El Teléfono Negro",
        genero:"Terror",
        duracion:107,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula3.png?alt=media&token=a7b3972c-c154-470d-8d86-0d3df1df90d9",
        sinopsis:"Finney Shaw es un niño tímido pero inteligente de 13 años que es secuestrado y atrapado en un sótano insonorizado por un asesino sádico. Cuando un teléfono desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voces de las víctimas anteriores del asesino. Y están decididos a asegurarse de que lo que les pasó a ellos no le pase a Finney.",
        clasificacion:"+15",
        idioma: "En subtitulado"
    },
    {
        nombre:"Elvis",
        genero:"Drama",
        duracion:160,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/plicula4.png?alt=media&token=10d1944d-e0ed-40d5-b4e4-14d9b31f1e0e",
        sinopsis:"La película explora la vida y la música de Elvis Presley (Butler) a través del prisma de su complicada relación con el coronel Tom Parker (Hanks), su enigmático manager. La historia profundiza en la compleja dinámica que existía entre Presley y Parker que abarca más de 20 años, desde el ascenso de Presley a la fama hasta su estrellato sin precedentes, en el contexto de la revolución cultural y la pérdida de la inocencia en Estados Unidos. Y en el centro de ese periplo está Priscilla Presley (Olivia DeJonge), una de las personas más importantes e influyentes en la vida de Elvis.",
        clasificacion:"+12",
        idioma: "Es subtitulado"
    },
    {
        nombre:"Apocalypsis Zombie",
        genero:"Suspenso",
        duracion:180,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula%205.png?alt=media&token=907c477c-ec30-46c2-9767-eaca36bf07c1",
        sinopsis:"secuela de la cinta de culto WYRMWOOD: ROAD TO DEAD, se lleva a cabo en un desierto australiano infestado de zombies donde el soldado Rhys quien ha dedicado su vida a rastrear y capturar supervivientes para el Cirujano General, se une a otros científicos locos, soldados malvados y héroes con la esperanza de encontrar una cura para el virus que amenaza a toda la humanidad.",
        clasificacion:"+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"El Perro Samurai: La Leyenda de Kakamucho",
        genero:"Animacion",
        duracion:180,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula6.png?alt=media&token=441e8dc4-6cb1-45c8-b963-46f41dff2d4d",
        sinopsis:"Hank, un sabueso con mala suerte, se encuentra en un pueblo lleno de gatos que necesitan un héroe que los defienda de un despiadado villano que quiere borrar a su aldea del mapa. Con la ayuda de un maestro que no quiere entrenarlo, nuestro desvalido héroe debe asumir el papel del samurái del pueblo y unirse a los aldeanos para salvar el día. El Perro Samurái: La leyenda de Kakamucho, próximamente en cines. Con las voces de Juanpa Zurita como Hank, Faisy como Ika Chu y Karla Díaz como Emiko.",
        clasificacion:"general",
        idioma: "Es subtitulado"
    },
    {
        nombre:"Tren Bala",
        genero:"Acción, Thriller",
        duracion:126 ,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicula7.jpg?alt=media&token=e9023645-6415-479d-89c0-f5230b625eab",
        sinopsis:"En Tren bala, Brad Pitt protagoniza la película en el papel de Ladybug, un asesino con poca suerte determinado a hacer su trabajo en paz después de que más de una de sus asignaciones se le han salido control. Sin embargo, el destino puede tener otros planes mientras que la última misión de Ladybug lo pone en un camino accidentado con adversarios mortales de diversas partes del planeta -todos conectados pero con objetivos en conflicto- en el tren más rápido del mundo…y tiene que descubrir como bajarse. Del director de Deadpool 2, David Leitch, el final del camino es sólo el comienzo de un viaje extremo sin parar a través de un Japón Moderno.",
        clasificacion:"general",
        idioma: "En subtitulado"
    },
    {
        nombre:"Todo en Todas Partes al Mismo Tiempo",
        genero:"Aventura",
        duracion:139,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/pelicual8.jpg?alt=media&token=9209d2f9-19fc-4578-85a3-8df4daa50139",
        sinopsis:"Con su lavandería al borde del fracaso y su matrimonio con el debilucho esposo Waymond en las rocas, Evelyn Wang, con exceso de trabajo, lucha por hacer frente a todo, incluida una relación hecha jirones con su padre crítico Gong Gong y Joy, su hija. Y, como si enfrentarse a una lúgubre crisis de la mediana edad no fuera suficiente, Evelyn debe prepararse para una reunión desagradable con un burócrata impersonal: Deirdre, la auditora del IRS mal vestida.",
        clasificacion:"+12",
        idioma: "Es subtitulado"
    },
    {
        nombre:"Minions 2: Nace un Villano",
        genero:"Acción, Comedia",
        duracion:87,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Pelicula%209.jpg?alt=media&token=739ff7d0-f079-4d42-b5f4-be1ba0c1c37e",
        sinopsis:"En el corazón de los años 70´s, un Gru de 12 años crece en los suburbios. Fan de los supervillanos Vicious 6, Gru decide que quiere ser tan malvado como ellos para unírseles. Con ayuda de sus secuaces, los Minions, construye su primera guarida, usa sus primeras armas y cumple sus primeras misiones.",
        clasificacion:"En general",
        idioma: "En subtitulado"
    },
    {
        nombre:"Un Parcero en Nueva York",
        genero:"Comedia",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Pelicula%2010.png?alt=media&token=82dc19e7-45d0-4a8d-a1e5-d4641d44c2b5",
        sinopsis:"Armando Pulido, un maestro de obra sencillo de buen corazón, trabajador, rebuscador y buen amigo, cansado de la grave crisis económica que vive en Colombia, decide irse a buscar el sueño americano a Nueva York, para esto intentan diversas formas de conseguir la visa americana hasta que lo logra de la manera menos pensada posible, al llegar a la gran manzana el hombre se ve enfrentado a rebuscársela con todo el ingenio. Al final logrará su sueño americano, pero le hará falta todo lo maravilloso que tenía en Colombia.",
        clasificacion:"En general",
        idioma: "Es"
    }
]


//Recorriendo un arreglo con JS.


//es un metodo para recorrer solo arreglos
/*
peliculas.forEach(function(pelicula){
   
    console.log(pelicula.nombre);
    console.log(pelicula.genero);
    console.log(pelicula.duracion);
    console.log(pelicula.poster);
    console.log(pelicula.sinopsis);
    console.log(pelicula.clasificacion);
    console.log(pelicula.idioma);
   */
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

  }
  
//})