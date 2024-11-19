let fechaActual = new Date();
const contenedor = document.getElementById('contenedor');

// Día de la semana
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let diaDeLaSemana = dias[fechaActual.getDay()];
const pDiaSemana = document.createElement('p');
contenedor.appendChild(pDiaSemana);
pDiaSemana.innerHTML = "Día de la semana: " + diaDeLaSemana;

// Día del mes
let diaDelMes = fechaActual.getDate();
const pDiaMes = document.createElement('p');
contenedor.appendChild(pDiaMes);
pDiaMes.innerHTML = "Día del mes: " + diaDelMes;

// Mes
let mes = fechaActual.getMonth() + 1; // Sumar 1 para mostrar el mes correcto
const pMes = document.createElement('p');
contenedor.appendChild(pMes);
pMes.innerHTML = "Mes: " + mes;

// Año
let year = fechaActual.getFullYear();
const pYear = document.createElement('p');
contenedor.appendChild(pYear);
pYear.innerHTML = "Año: " + year;

//Hora


