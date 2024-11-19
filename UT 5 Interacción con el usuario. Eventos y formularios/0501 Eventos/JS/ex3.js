let arr = [];
        let p1 = document.getElementById("p1");

        // Se activa cuando el usuario presiona una tecla
        document.addEventListener("keydown", (event) => {
            console.log("Evento keydown:", event.key);
            arr.push(event.key);
        });

        // Se activa cuando se presiona una tecla que representa un carácter imprimible
        document.addEventListener("keypress", (event) => {
            console.log("Evento keypress:", event.key);
        });

        // Se activa cuando el usuario suelta una tecla
        document.addEventListener("keyup", (event) => {
            console.log("Evento keyup:", event.key);
        });

        // Muestra el contenido del array al hacer clic en el botón
        document.getElementById("b1").addEventListener("click", (event) => {
            
            p1.innerHTML = " ";  
            
            arr.forEach(element => {
                p1.innerHTML += element;
            });
        });