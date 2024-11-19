let claveCorrecta = "1234";
let clave;
while (true) {
    clave = prompt("Introduce la clave:");
    if (clave === claveCorrecta) {
        alert("¡Clave correcta!");
        break;
    } else if (clave === null) {
        break;
    } else {
        alert("Clave incorrecta, intenta de nuevo.");
    }
}
