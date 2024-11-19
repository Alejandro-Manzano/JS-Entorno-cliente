let num1 = parseFloat(prompt("Introduce num"));
let num2 = parseFloat(prompt("Introduce num"));
let num3 = parseFloat(prompt("Introduce num"));

if (num1>num2 && num1>num3) {
    alert(num1+ " es el mayor de " +num1+ ", " +num2+ " y " +num3);
}
if (num2>num1 && num2>num3) {
    alert(num2+ " es el mayor de " +num1+ ", " +num2+ " y " +num3);
}
if (num3>num1 && num3>num2) {
    alert(num3+ " es el mayor de " +num1+ ", " +num2+ " y " +num3);
}