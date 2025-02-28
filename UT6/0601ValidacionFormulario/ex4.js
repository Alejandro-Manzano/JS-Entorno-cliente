document.getElementById("b").addEventListener("click", function () {
   
    document.addEventListener("DOMContentLoaded", function() {
        let otros = document.getElementById("otro");
        let i = document.getElementById("ft");
    
            otros.addEventListener("change", function() {
                i.style.display = otros.checked ? "block" : "none";
                if (i.style.display == "block" && i.value == " ") {
                    alert("Otros vacio")
                }
            });
    
            // Asegurar el estado inicial
            i.style.display = otros.checked ? "block" : "none";
    
        let socio = document.getElementById("socio"); 
        let socioInput = document.getElementById("socioInput");
    
        socio.addEventListener("change", function() {
            socioInput.style.display = socio.checked ? "block" : "none";
        });
       
        if (!socio.checked) {
            socioInput.style.display = "none";
        }
    
        document.getElementById("marcarTodos").addEventListener("click", function (event) {
            event.preventDefault(); // Evita la recarga de la página
            document.querySelectorAll('input[name="lenguaje"]').forEach(checkbox => checkbox.checked = true);
            i.style.display = "block";
        });
        
        document.getElementById("desmarcarTodos").addEventListener("click", function (event) {
            event.preventDefault(); // Evita la recarga de la página
            document.querySelectorAll('input[name="lenguaje"]').forEach(checkbox => checkbox.checked = false);
            i.style.display = "none";
        });
        
    });

})