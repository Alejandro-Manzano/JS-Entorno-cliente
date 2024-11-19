
    class Coche {
        constructor (marca,modelo,año,concesionario){
            this.marca = marca,
            this.modelo = modelo,
            this.año = año,
            this.concesionario = concesionario
        }

        cocheToTable() {
            return `<tr>
                <td>${this.marca}</td>
                <td>${this.modelo}</td>
                <td>${this.año}</td>
                <td>${this.concesionario.nombre}</td>
            </tr>`
        }
    }

    class Concesionario {
        constructor (codigo,nombre,direción,ciudad,teléfono,responsable){
            this.codigo = codigo,
            this.nombre = nombre,
            this.direción = direción,
            this.ciudad = ciudad,
            this.teléfono = teléfono,
            this.responsable = responsable
        }

        concesionarioToTable() {
            return `<tr>
                <td>${this.codigo}</td>
                <td>${this.nombre}</td>
                <td>${this.direción}</td>
                <td>${this.ciudad}</td>
                <td>${this.teléfono}</td>
                <td>${this.responsable}</td>
            </tr>`
        }
    }

    const concesionarios = [
        new Concesionario("01", "Alcalá", "C/ Alcalá 520", "Madrid", "915555555", "Pablo"),
        new Concesionario("02", "Majadahonda", "C/ Cereza 19", "Majadahonda", "", "")
    ];    

    const coches = [
        new Coche("Seat", "Toledo", 1999, concesionarios[0]),
        new Coche("Ferrari", "Scaglietti", 2010, concesionarios[1]),
        new Coche("BMW", "Z4", 2010, concesionarios[0])
    ];

    const tablaCoches = document.getElementById("cochesTable");
    const tablaConcesionarios = document.getElementById("concesionariosTable");
    
    concesionarios.forEach(element => {
        tablaConcesionarios.innerHTML += element.concesionarioToTable();
    });

    coches.forEach(element => {
        tablaCoches.innerHTML += element.cocheToTable();
    });