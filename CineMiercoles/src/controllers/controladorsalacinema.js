import { pintarasientos } from "../helper/pintarSillas.js";

let asientos
let asientosenmemoria= JSON.parse(localStorage.getItem("asientos"));

if(asientosenmemoria==null){

    asientos=[
        [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
        [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
        [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}],
        [{id:"a4",estado:0},{id:"b4",estado:0},{id:"c4",estado:0},{id:"d4",estado:0}]
    ]

}else{
    asientos=asientosenmemoria
}



//PINTAR DESDE JS MI SALA DE CINE:

let cinema = document.getElementById('salaCinema');

pintarasientos(asientos,cinema);


let cantidadyValor = document.getElementById('cantidadyValor');
let precio = document.getElementById('precio');
let contador = 0;

let validar = document.getElementById('validar');

//Evento click

cinema.addEventListener('click',function(evento){
    if(evento.target.tagName=="IMG"){
        let idasientoseleccionado = evento.target.id;
        asientos.forEach(function(hilera){
            hilera.forEach(function(asiento){
                if(asiento.id==idasientoseleccionado){

                    //ENCONTRE EL ASIENTO DONDE SE QUIERE SENTAR
                    if(asiento.estado==0){
                        asiento.estado=1
                        evento.target.src="https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/SILLASRESERVADA-01.svg?alt=media&token=147996f3-02d7-4b6f-9088-7a340a3817f4"
                        contador++

                        validar.addEventListener("click",function(){
                            cantidadyValor.textContent=contador
                            let cantidad;
                            cantidad = contador * 13000;
                            precio.textContent=cantidad
                            asiento.estado=2
                            localStorage.setItem('asientos',JSON.stringify(asientos));

                        })

                        /*if(asiento.estado==0){
                            asiento.estado=2
                            evento.target.src='../../assets/img/cinema-chair-rojo.png';
                        }*/
                    }else if(asiento.estado==1){
                        asiento.estado=0
                        evento.target.src="../../assets/img/cinema-chair.png"
                        contador--
                        /*if(asiento.estado==1){
                            asiento.estado=2
                            evento.target.src='../../assets/img/cinema-chair-rojo.png';
                        }*/
                    }
                    
                }
            })

        })
       
    }
})


//VOY ADICIONAR DESDE JS LAS CARAS DE DISPONIBLE.....

    let numeros = [2,4,5,6];
    console.log(numeros);

  /*  let caras = [
        {
            nombre: "DISPONIBLE",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/SILLASNEGRA-01.svg?alt=media&token=681f3af5-0dc4-49c2-9ebc-8acf25d64839"
        },
        {
            nombre: "TU ASIENTO",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/SILLASRESERVADA-01.svg?alt=media&token=147996f3-02d7-4b6f-9088-7a340a3817f4"
        },
        {
            nombre: "NO DISPONIBLE",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/SILLASOCUPADA-01.svg?alt=media&token=4c8bc6d0-cd5b-42c0-93ca-de9dc1340b69"
        }
    ]
        let filaCaras = document.getElementById('filaCaras');

        caras.forEach(function(cara){
            let columna = document.createElement('div');
            columna.classList.add('poster');
            
            let casilla = document.createElement('div');
            casilla.classList.add('posterTexto');

            let imgenn = document.createElement('img');
            imgenn.classList.add('posterimg');
            imgenn.src=cara.imagen;

            let parrafo = document.createElement('p');
            parrafo.classList.add('posterTextop')
            parrafo.innerText=cara.nombre;
                 
            casilla.appendChild(imgenn);
            casilla.appendChild(parrafo);
            
            columna.appendChild(casilla);
            filaCaras.appendChild(columna);
        })




validar.addEventListener('click', (a)=>{   
    console.log(asientos)
    if(a.target.classList.contains('btn-info')){
        cantidadyValor.textContent=contador;
        }
    if(a.target.classList.contains('btn-info')){
        let cantidad;
        cantidad = contador * 10;
        precio.textContent=cantidad;
    }

    localStorage.setItem('contador',JSON.stringify(contador));

}) */ 








