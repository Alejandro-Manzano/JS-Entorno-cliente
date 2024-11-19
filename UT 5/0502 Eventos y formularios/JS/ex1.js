
    function imprimir() {

        //titulo resultados
        document.getElementById("h1").innerHTML = "Resultados - Formulario";
       
        
        let name = document.getElementById("nombre");
        document.getElementById("p1").innerHTML = "Nombre: " + name.value;



        //Compruebo los lenguages de programación
        const checkboxes = document.querySelectorAll('input[name="curso"]');
        let seleccionados = [];
        // Comprobar si al menos uno está marcado
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                seleccionados.push(checkbox.value);
            }
        });

        // Mostrar mensaje de error si no hay ninguno seleccionado
        const mensajeError = document.getElementById("error");
        if (seleccionados.length == 0) {
            mensajeError.innerHTML = "Por favor, selecciona al menos un curso.";
        } else{
            mensajeError.innerHTML = "";
            document.getElementById("p2").innerHTML = "Cursos seleccionados: " ;
            seleccionados.forEach(element => {
                document.getElementById("p2").innerHTML += element + "  ";
            });
        }

        let op = document.querySelectorAll["sl"];
        document.getElementById("p3").innerHTML = "Edad: " +op.value;

    }


    let btn = document.getElementById("btn");
    btn.addEventListener("click", function (event) {
        // Prevenir el envío del formulario
        event.preventDefault();
     
        imprimir();
    });

