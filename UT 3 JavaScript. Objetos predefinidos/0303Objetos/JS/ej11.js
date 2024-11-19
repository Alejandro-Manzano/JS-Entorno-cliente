let number1 = parseFloat(prompt("Introuce un nº decimal"));
let redondeo = parseInt(prompt("Introduce un número d erendondeo"));
let n = number1.toFixed(redondeo);

let p = document.getElementById("p1");
p.innerHTML+= n;