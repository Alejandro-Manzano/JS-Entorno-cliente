document.getElementById("button1").addEventListener("click", function(event) {
    event.preventDefault();  // Evita comportamiento predeterminado del botón

    let n = document.getElementById("nombre").value; // Obtiene el valor en el momento del click
    let container = document.getElementById("container");

    container.innerHTML = n; // Muestra el valor del input
});
