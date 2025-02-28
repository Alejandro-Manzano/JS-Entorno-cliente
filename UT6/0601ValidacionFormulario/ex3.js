document.getElementById("password").addEventListener("input", function () {
    document.getElementById("confirmar").value = "";
  });

function lanzar() {
    let usuario = document.getElementById("usuario").value;
    console.log("Usuario: " +usuario);

    let password = document.getElementById("password").value;
    let password2 = document.getElementById("confirmar").value;

    if (password !== password2) {
        alert("contraseñas no coincide")
    }else{
        console.log("Contraseña: " +password);
    }

    let seleccionado = document.querySelector('input[name="suscripcion"]:checked').value;
    console.log("Suscripcion: " +seleccionado);
    

}

document.getElementById("btn").addEventListener("click", function (event) {
    lanzar();
})