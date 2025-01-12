let fecha = new Date();

// Array de los días de la semana
const diasSemana = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Array de los meses del año
const mesesAno = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let dia = diasSemana[fecha.getDay()];
let mes = mesesAno[fecha.getMonth()];

let fechaTotal = dia + ", " + fecha.getDate() + " de " + mes + " " + fecha.getFullYear();

document.getElementById("p-fecha").innerHTML = fechaTotal;
