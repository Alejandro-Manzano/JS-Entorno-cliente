// Función para detectar el tipo de botón pulsado
function obtenerBoton(event) {
    switch (event.button) {
        case 0: return "Izquierdo";
        case 1: return "Central";
        case 2: return "Derecho";
        default: return "Desconocido";
    }
}

// Función que maneja los eventos del ratón y los muestra en la consola
function logMouseEvent(event) {
    const x = event.clientX;
    const y = event.clientY;

    switch (event.type) {
        case 'click':
            console.log(`click con el botón ${obtenerBoton(event)}, coordenadas: X: ${x}, Y: ${y}`);
            break;
        case 'dblclick':
            console.log(`dblclick con el botón ${obtenerBoton(event)}, coordenadas: X: ${x}, Y: ${y}`);
            break;
        case 'contextmenu':
            console.log("Ha accedido al menú contextual");
            break;
        case 'wheel':
            console.log("Ha movido la rueda del ratón");
            break;
        default:
            console.log(`Evento ${event.type} no capturado`);
    }
    console.log('-------------------');  // Línea separadora entre eventos
}

// Lista de eventos a capturar
const eventosDeRaton = ['click', 'dblclick', 'contextmenu', 'wheel'];

// Agrega un listener para cada evento en la ventana
eventosDeRaton.forEach(evento => {
    window.addEventListener(evento, logMouseEvent);
});