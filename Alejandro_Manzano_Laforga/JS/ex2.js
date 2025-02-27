
function crearObjeto() {
    
    let producto = document.getElementById("producto").value;
    let unidades = document.getElementById("unidades").value;

}


//botón para añadir artículos
let btnAdd = document.getElementById("add");

btnAdd.addEventListener("click", function(event) {
    
    event.preventDefault();
    crearObjeto();

})