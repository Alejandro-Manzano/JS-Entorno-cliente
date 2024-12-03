let u = document.getElementById("unidades");
let p = document.getElementById("precio");
let t = document.getElementById("total");
let pr = document.getElementById("pr");
let un = document.getElementById("un");

function calcularTotal() {
    // Convertir valores a números para hacer cálculos
    let unidades = parseInt(u.value);
    let precio = parseFloat(p.value);
    
    // Validar que las unidades sean un número entero y mayor o igual que 1
    if (unidades >= 1 && unidades === parseFloat(u.value)) {
        un.innerHTML = "";
        u.style.border = "";
    } else {
        un.innerHTML = "Introduce un valor entero y mayor o igual que 1 en unidades";
        u.style.border = "1px solid red";
        return; // Salir de la función si la validación no pasa
    }

    // Validar que el precio sea mayor o igual a 0
    if (precio >= 0) {
        pr.innerHTML = "";
        p.style.border = "";
    } else {
        pr.innerHTML = "Introduce un precio mayor o igual que 0 en precio";
        p.style.border = "1px solid red";
        return; // Salir de la función si la validación no pasa
    }

    // Calcular el total si todo es válido
    let total = unidades * precio;

    // Formatear el total a 2 decimales
    total = total.toFixed(2);
    t.innerHTML = "Total: " + total + " $";
}

// Añadir eventos de entrada (input) a ambos campos
u.addEventListener("input", calcularTotal);
p.addEventListener("input", calcularTotal);
