let palabra = prompt("Introduce una frase o palabra");

let letras = palabra.split('');
let cnt = document.getElementById("contenedor");

for (let i=0; i<letras.length; i++) {
 
    if (letras[i] != " ") {
        let p = document.createElement('p');
        p.innerHTML = letras[i];
        cnt.appendChild(p);
    }

}
