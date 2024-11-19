let numero = parseFloat(prompt("Introduce un número para mostrar su tabla de multiplicar"));

if (!isNaN(numero)) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
} else {
    alert("Entrada inválida");
}
