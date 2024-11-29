let u = document.getElementById("unidades");
let p = document.getElementById("precio");
let t = document.getElementById("total");
let pr = document.getElementById("pr");
let un = document.getElementById("un");

function calcularTotal() {
 
    if (u.value % 1 == 1 || u.value >= 1) {
        un.innerHTML = "";
        u.style.border = "";
        return;
    } else{
        un.innerHTML = "Introduce un valor entero  y mayor o igual que 1 en unidades";
        u.style.border = "1px solid red";
    }

    if (p.value >= 0) {
        pr.innerHTML = "";
        p.style.border = "";
    } else {
        pr.innerHTML = "Introduce un precio mayor o igual que 0 en precio";
        p.style.border = "1px solid red";
    }


    if (u.value % 1 == 1 && u.value >= 1 && p.value >= 0) {
        let total = u.value*p.value;
        total.toFixed(2);
        t.innerHTML ="Total: "+ total + " $";
    }

}

// Añadir eventos de entrada (input) a ambos campos
u.addEventListener("input", calcularTotal);
p.addEventListener("input", calcularTotal);
