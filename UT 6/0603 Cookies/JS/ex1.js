document.getElementById("crearModificar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;
    const dias = parseInt(document.getElementById("dias").value, 10);

    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = "";

    if (!nombre) {
        mensajes.innerText = "Debe introducir un nombre para crear la cookie.";
        return;
    }

    setCookie(nombre, valor, dias || 0);
    mensajes.innerText = `Cookie creada: ${nombre} = ${valor}`;
});

document.getElementById("borrar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;

    if (!nombre) {
        mensajes.innerText = "Debe introducir el nombre de la cookie que desea eliminar.";
        return;
    }

    deleteCookie(nombre);
    mensajes.innerText = `Cookie eliminada: ${nombre}`;
});

document.getElementById("ver").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;

    if (!nombre) {
        mensajes.innerText = "Debe introducir un nombre de cookie que exista.";
        return;
    }

    const valor = getCookie(nombre);
    if (valor) {
        document.getElementById("valor").value = valor;
    } else {
        mensajes.innerText = "Cookie no encontrada.";
    }
});

document.getElementById("listado").addEventListener("click", () => {
    const cookies = listCookies();
    mensajes.innerText = cookies.length ? cookies.join('\n') : "No hay cookies.";
});

document.getElementById("borrarTodas").addEventListener("click", () => {
    const cookies = listCookies();
    cookies.forEach(cookie => deleteCookie(cookie.split('=')[0]));
    mensajes.innerText = "Cookies eliminadas.";
});
