let n = prompt("Introduce un número");
let decimal = prompt("Introduce un número de decimale");

let factor = Math.pow(10, decimal);
let res = Math.round(n*factor)/factor;

const p = document.createElement('p');
contenedor.appendChild(p);
p.innerHTML = "Número redondeado: " +res;