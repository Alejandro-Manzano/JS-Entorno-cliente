const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let numero;
while (true) {
    numero = prompt("Introduce el número del DNI (entre 0 y 99999999):");
    
    if (numero === null) break;

    numero = parseInt(numero);

    if (!isNaN(numero) && numero >= 0 && numero <= 99999999) {
        let letra = letras[numero % 23];
        alert(`DNI: ${numero}-${letra}`);
        break;
    } else {
        alert("Número incorrecto, intenta de nuevo.");
    }
}
