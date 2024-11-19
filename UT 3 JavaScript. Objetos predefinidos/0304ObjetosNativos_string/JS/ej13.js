let palabra = prompt("Introduce una frase o palabra");
document.getElementById("p1").innerHTML += palabra;

let letras = palabra.split('');

letras[0] = letras[0].toUpperCase();
letras[letras.length - 1] = letras[letras.length - 1].toUpperCase();


let acc = 0;

for (let index = 0; index < letras.length; index++) {

    if (index%2 == 0) {
        document.getElementById("p6").innerHTML += letras[index];
    }

    if (letras[index] === "U" || letras[index] === "O" || letras[index] === "I" || letras[index] === "E" ||
        letras[index] === "A" || letras[index] === "u" || letras[index] === "o" || letras[index] === "i" ||
        letras[index] === "e" || letras[index] === "a" ) {
        acc++;
        document.getElementById("p3").innerHTML += "_";
    } else{
        document.getElementById("p3").innerHTML += letras[index];
        document.getElementById("p4").innerHTML += letras[index].toUpperCase();
    }
}

document.getElementById("p2").innerHTML += acc;
document.getElementById("p5").innerHTML += letras[0].toLowerCase();
document.getElementById("p5").innerHTML += letras[letras.length-1].toLowerCase();

let letras2 = [];


letras.forEach(element => {
    if (element!= " ") {
        letras2.push(element);
    }
});

let rev = letras2.reverse();
let acc2 = 0;

for (let index = 0; index < letras2.length; index++) {
    
    if (letras2[index] == rev[index]) {
        acc2++;
    }
}
console.log(acc2);

if (acc2 == letras2.length) {
    document.getElementById("p7").innerHTML += "Si";
} else{
    document.getElementById("p7").innerHTML += "No";
}




