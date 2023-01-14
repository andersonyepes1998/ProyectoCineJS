
export function pintarasientos(asientos, cinema){

//Recorrerlos asientos y aplicar traversing

asientos.forEach(function(hilera){

    let fila = document.createElement('div');
    fila.classList.add('row');

        hilera.forEach(function(asiento){
            let columna = document.createElement('div');
            columna.classList.add('col-3');

            let fotoSilla = document.createElement('img');
            fotoSilla.classList.add('img-fluid','w-100');
            fotoSilla.setAttribute('id',asiento.id);

                if(asiento.estado==0){
                    fotoSilla.src='https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/SILLASNEGRA-01.svg?alt=media&token=681f3af5-0dc4-49c2-9ebc-8acf25d64839';
                }else if(asiento.estado==2){
                    fotoSilla.src='https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/SILLASOCUPADA-01.svg?alt=media&token=4c8bc6d0-cd5b-42c0-93ca-de9dc1340b69';
                }

            //padres e hijos

            columna.appendChild(fotoSilla);
            fila.appendChild(columna);

    });
    
    cinema.appendChild(fila);
})

    
/*
localStorage.setItem('pintarasientos',JSON.stringify(pintarasientos));

let cantidadyValor = document.getElementById('cantidadyValor');
let contador = 0;

let validar = document.getElementById('validar');

validar.addEventListener('click', (evento)=>{
    if(evento.target.classList.contains('btn-info')){
        
        let idasientoseleccionado = evento.target.id;
        asientos.forEach(function(hilera){
            hilera.forEach(function(asiento){
                if(asiento.id==idasientoseleccionado){
                    //ENCONTRE EL ASIENTO DONDE SE QUIERE SENTAR
                    if(asiento.estado==0){
                        asiento.estado=1
                        evento.target.src="../..//assets/img/cinema-chair-verde.png"
                    }else if(asiento.estado==1){
                        asiento.estado=0
                        evento.target.src="../../assets/img/cinema-chair.png"
                    }
                    
                }
            })
        })
    }
})
*/
}
