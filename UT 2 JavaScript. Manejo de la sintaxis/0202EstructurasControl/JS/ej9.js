let resultado = "";
for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= i; j++) {
        resultado += j + " ";
    }
    resultado += "\n";
}
alert(resultado);
