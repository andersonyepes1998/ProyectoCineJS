export function pintarCrispetas(comidas){
    let fila5 = document.getElementById('fila5');

    comidas.forEach(function(comida){
        let columna=document.createElement('div');
        columna.classList.add('col');

        let tarjetaComidas=document.createElement('div');
        tarjetaComidas.classList.add('card','h-100','shadow');

        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=comida.poster;

        let nombreComida=document.createElement('h5');
        nombreComida.classList.add('Card-title');
        nombreComida.textContent=comida.nombre;

        let descripcionComida=document.createElement('p');
        descripcionComida.innerText=comida.descripcion;

        let valorComida=document.createElement('p');
        valorComida.classList.add('valorPrecios');
        valorComida.innerText="$ " + comida.valor;


        tarjetaComidas.appendChild(poster);
        tarjetaComidas.appendChild(nombreComida);
        tarjetaComidas.appendChild(descripcionComida);
        tarjetaComidas.appendChild(valorComida);

        columna.appendChild(tarjetaComidas);
        fila5.appendChild(columna);
    })
}




export function pintarCombos(combos){
    let fila6 = document.getElementById('fila6');

    combos.forEach(function(combo){
        let columna=document.createElement('div');
        columna.classList.add('col');

        let tarjetaComidas=document.createElement('div');
        tarjetaComidas.classList.add('card','h-100','shadow');

        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=combo.poster;

        let nombreCombo=document.createElement('h5');
        nombreCombo.classList.add('Card-title');
        nombreCombo.textContent=combo.nombre;

        let descripcionCombo=document.createElement('p');
        descripcionCombo.innerText=combo.descripcion;

        let valorCombo=document.createElement('p');
        valorCombo.classList.add('valorPrecios');
        valorCombo.innerText="$ " + combo.valor;

        tarjetaComidas.appendChild(poster);
        tarjetaComidas.appendChild(nombreCombo);
        tarjetaComidas.appendChild(descripcionCombo);
        tarjetaComidas.appendChild(valorCombo);

        columna.appendChild(tarjetaComidas);
        fila6.appendChild(columna);

    })
}




export function pintarBebidas(bebidas){
    let fila7 = document.getElementById('fila7');

    bebidas.forEach(function(bebida){
        let columna=document.createElement('div');
        columna.classList.add('col');

        let tarjetaComidas=document.createElement('div');
        tarjetaComidas.classList.add('card','h-100','shadow');

        let poster=document.createElement('img');
        poster.classList.add('card-img-top');
        poster.src=bebida.poster;

        let nombreBebida=document.createElement('h5');
        nombreBebida.classList.add('Card-title');
        nombreBebida.textContent=bebida.nombre;

        let descripcionBebida=document.createElement('p');
        descripcionBebida.innerText=bebida.descripcion;

        let valorBebida=document.createElement('p');
        valorBebida.classList.add('valorPrecios');
        valorBebida.innerText="$ " + bebida.valor;

        tarjetaComidas.appendChild(poster);
        tarjetaComidas.appendChild(nombreBebida);
        tarjetaComidas.appendChild(descripcionBebida);
        tarjetaComidas.appendChild(valorBebida);

        columna.appendChild(tarjetaComidas);
        fila7.appendChild(columna);

    })
}