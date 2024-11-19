let cateto1 = prompt("Cateto 1");
let cateto2 = prompt("Cateto 2");
let res = Math.hypot(cateto1,cateto2);

const p = document.createElement('p');
contenedor.appendChild(p);
p.innerHTML = "Pitágoras: " +res;