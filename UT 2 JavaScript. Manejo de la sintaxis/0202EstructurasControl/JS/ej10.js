while (true) {
   
    let number = prompt("Dime un número entre 1 y 50");
    let resultado = "";

    if (number >=1 && number <=50) {
        for(let i = number; i<=50; i++){
            resultado += i + ", ";
        }
        alert(resultado); 
        break;
    }

}

