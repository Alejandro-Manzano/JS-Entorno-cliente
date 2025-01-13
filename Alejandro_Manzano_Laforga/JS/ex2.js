
let arrayArticulos = [];

function crearObjeto() {

    let producto = document.getElementById("producto").value;
    let unidades = document.getElementById("unidades").value;
    let precio = document.getElementById("precio").value;

    let Articulo = {
        "Producto":producto,
        "Unidades":unidades,
        "Precio":precio
    }

    arrayArticulos.push(Articulo);

    document.getElementById("nart").innerHTML = arrayArticulos.length + " artículo/s seleccionados";
    console.log(arrayArticulos);
    
    document.getElementById("formArticulos").reset();

}

function printObj() {

    let lista = document.getElementById("lista");
    let descuento = document.getElementById("descuento").value;
    let precioTotal = 0;

    // Recorrer el array y crear elementos <p> para cada artículo
    arrayArticulos.forEach(element => {
        let p = document.createElement("p");
        let precioTotalProducto = element.Unidades*element.Precio;
        p.innerHTML = "Producto: " +element.Producto+ ",  Unidades: " +element.Unidades+ ",  Precio: " +element.Precio+ "$ ---- Precio total: " +precioTotalProducto+ " $";
        precioTotal += precioTotalProducto;
        precioTotalProducto = 0;
        lista.appendChild(p);

    });

    document.getElementById("sindes").innerHTML = "Precio sin descuento: " +precioTotal+ " $";
    let f = (precioTotal*descuento)/100;
    let final = precioTotal-f;
    document.getElementById("des").innerHTML = "Precio con descuento: " +final+ " $";

}


//botón para añadir artículos
let btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", function(event) {
    
    event.preventDefault();
    crearObjeto();

})


let btnComprar = document.getElementById("comprar");
btnComprar.addEventListener("click", function (event) {
        
       event.preventDefault();   
       printObj();    
       
})