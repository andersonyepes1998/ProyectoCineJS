
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
                    fotoSilla.src='../../assets/img/cinema-chair.png';
                }else if(asiento.estado==2){
                    fotoSilla.src='../../assets/img/cinema-chair-rojo.png';
                }

    
            //padres e hijos

            columna.appendChild(fotoSilla);
            fila.appendChild(columna);

    });
    
    cinema.appendChild(fila);
})
/*
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
