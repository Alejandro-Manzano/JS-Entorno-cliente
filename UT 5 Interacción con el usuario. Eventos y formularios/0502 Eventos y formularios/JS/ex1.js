function imprimir() {

    let acc = 0;
    // Título de los resultados
    document.getElementById("h1").innerHTML = "Resultados - Formulario";
    
    let name = document.getElementById("nombre");
    // Corregir la comparación con '==='
    if (name.value === "") {
        document.getElementById("s1").innerHTML = "  Rellene este campo";
    } else {
        document.getElementById("p1").innerHTML = "Nombre: " + name.value + "<br>";
        acc+=1;
    }

    // Comprobar los lenguajes de programación seleccionados
    const checkboxes = document.querySelectorAll("input[name='curso']:checked");  
    if (checkboxes.length == 0) {
        document.getElementById("s2").innerHTML = "  Rellene este campo";
    } else {
        document.getElementById("p2").innerHTML = "Lenguajes seleccionados: "; 
        checkboxes.forEach(element => {
            document.getElementById("p2").innerHTML += element.value + " ";
        });
        acc+=1;
    }

    // Comprobar la edad seleccionada
    let edad = document.getElementById("sl");
    // Corregir la comparación con '==='
    if (edad.value === "") {
        document.getElementById("s3").innerHTML = "  Rellene este campo";
    } else {
        document.getElementById("p3").innerHTML = "<br><br> Edad: " + edad.value;
        acc+=1;
    }

    // Comprobar si es socio
    const res = document.querySelectorAll("input[name='radio']:checked");   
    if (res.length == 0) {
        document.getElementById("s4").innerHTML = "  Rellene este campo";
    } else {
        document.getElementById("p4").innerHTML = "Es socio? : ";
        res.forEach(element => {
            document.getElementById("p4").innerHTML += element.value + " ";
        });
        acc+=1;
    }
    console.log(acc);
    
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();
 
    imprimir();
});
