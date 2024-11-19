function parImpar() {
    let num = prompt("Introduce un número");
    if (num%2 == 0) {
        document.getElementById("d1").innerHTML += "<p>Número par</p>"
    }else{
        document.getElementById("d1").innerHTML += "<p>Número impar</p>"
    }
}


function aplicarIVA() {
    let precio = parseFloat(prompt("Dime un precio"));
    let iva = parseFloat(prompt("Dime el IVA"));

    document.getElementById("d1").innerHTML += `<p>Precio: ${precio} $</p>`;
    document.getElementById("d1").innerHTML += `<p>IVA: ${iva} %</p>`;

    let conIva = (iva * precio) / 100;
    let total = conIva + precio;

    document.getElementById("d1").innerHTML += `<p>Precio con IVA: ${total} $</p>`;
}


function diasAnyo() {
   
    let fecha = prompt("Introduce una fecha en formato mes/año (ejemplo: 02/2024)");
    let [mes, año] = fecha.split('/').map(Number);

   
    if (isNaN(mes) || isNaN(año) || mes < 1 || mes > 12) {
        alert("0 días");
      
    } else{
        let dias = new Date(año, mes, 0).getDate();
        document.getElementById("d1").innerHTML+= `El mes ${mes} del año ${año} tiene ${dias} días.`;
    }   
}


function numAleatorio() {
    
    let n1 = prompt("Número 1");
    let n2 = prompt("Número 2");

    let aleatorio = Math.floor(Math.random() * (n2-n1+1)+n1);
    document.getElementById("d1").innerHTML+= `El mes nº aleatorio entre ${n1} y ${n2} es ${aleatorio}.`;

}



