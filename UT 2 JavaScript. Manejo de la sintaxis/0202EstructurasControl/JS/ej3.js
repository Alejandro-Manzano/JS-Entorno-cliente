let dia = prompt("Introduce un día de la semana").toLowerCase();
switch (dia) {
    case 'lunes':
    case 'miércoles':
    case 'viernes':
        alert("Hay clase de DWEC.");
        break;
    default:
        alert("No hay clase de DWEC.");
        break;
}
