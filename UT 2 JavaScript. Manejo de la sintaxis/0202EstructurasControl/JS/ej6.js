let suma = 0;
let contador = 0;
let numero;

while (true) {
    numero = prompt("Introduce un número (0 para terminar):");
    if (numero === null || numero === "0") break;

    numero = parseFloat(numero);
    if (!isNaN(numero)) {
        suma += numero;
        contador++;
    }
}

let media = contador === 0 ? 0 : (suma / contador);
alert("La media es: " + media);
