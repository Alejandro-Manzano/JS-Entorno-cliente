let fecha = new Date();
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let dia = diasSemana[fecha.getDay()];
let year = fecha.getFullYear();
let diaMes = fecha.getDate();
let mes = fecha.getMonth() + 1; // Corregir el mes (sumar 1)

let dC = `${dia} / ${diaMes} / ${mes} / ${year}`; // Formato corregido

// Asignar el valor al campo de fecha
document.getElementById("fecha").value = dC;

function lanzar() {
    let n = document.getElementById("n").value;
    let container = document.getElementById("container");
    document.getElementById("pn").innerHTML = "Nombre: " + n;
    if (n === "") {
        alert("Por favor, ingresa un nombre.");
    }else{
        container.style.display = "block"; // Mostrar el div cuando el botón sea presionado
    }

    let seleccionado = document.querySelector('input[name="sexo"]:checked').value;

    document.getElementById("s").innerHTML = "Sexo: " + seleccionado;
    
    let s2 = [...document.querySelectorAll('input[name="fruta[]"]:checked')].map(f => f.value);
    document.getElementById("fruta").innerHTML = "Frutas: " + s2;

    let s3 = document.getElementById("es").value;
    document.getElementById("estado").innerHTML = "Estado: " +s3;
   
}

document.getElementById("b").addEventListener("click", function () {
    lanzar();
});