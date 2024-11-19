
let nota = parseFloat(prompt("Introduce tu nota"));

if (nota >= 0 && nota <= 4.999) {
    alert("Nota: " +nota+ " , Suspenso");
} else if (nota >= 5 && nota <= 6.999) {
    alert("Nota: " +nota+ " , Aprobado");
} else if (nota >= 7 && nota <= 8.999) {
    alert("Nota: " +nota+ " , Notable");
} else if (nota >= 9 && nota <= 10) {
    alert("Nota: " +nota+ " , Sobresaliente");
} else {
    alert("Nota: " +nota+ " , Nota errónea");
}
