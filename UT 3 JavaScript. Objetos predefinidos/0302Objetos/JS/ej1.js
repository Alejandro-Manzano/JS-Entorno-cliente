let numPrimitiva = Math.floor(Math.random()*49)+1;
let numReintegro= Math.floor(Math.random()*10);

const p = document.createElement('p');
contenedor.appendChild(p);
p.innerHTML = "Número primitiva: " +numPrimitiva+ " Número reintegro: " +numReintegro;
