
    let persona = {

        nombre: "Irene",
        apellido1: "Rodil",
        apellido2: "Jimenez",
        saldo: 0.00,
        numbreTitular: function () {
            document.getElementById("titular").innerHTML+= this.nombre+ " "+this.apellido1 + " " + this.apellido2;
        },
        ingresar: function () {
            let pos = parseFloat(prompt("Cuanto dinero quieres ingresar ?"));
            this.saldo += pos;
            document.getElementById("s").innerHTML = "Su saldo actual es de: " + this.saldo.toFixed(2)+ " $";
        },
        retirar: function () {
            let neg = parseFloat(prompt("Cuanto dinero quieres retirar ?"));
            this.saldo -= neg;
            document.getElementById("s").innerHTML = "Su saldo actual es de: "+ this.saldo.toFixed(2)+ " $";
        },
        infoSaldo: function(){
            document.getElementById("s").innerHTML += this.saldo.toFixed(2)+ " $";
        }

    }

    document.getElementById("b1").addEventListener("click", function() {
        persona.ingresar();
    });

    document.getElementById("b2").addEventListener("click", function() {
        persona.retirar();
    });

    persona.numbreTitular();
    persona.infoSaldo();
   
   
