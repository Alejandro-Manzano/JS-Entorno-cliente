let input = prompt("Introduce un número:");

let resultado = document.getElementById("resultado");


 if (input === null || input.trim() === "") {
     resultado.textContent = "No es un entero";
 } else {
     let numero = Number(input);
     if (Number.isInteger(numero)) {
         resultado.innerHTML = "El número " +numero+ " es un entero";
     } else {
         resultado.innerHTML = "No es un entero";
     }
 }