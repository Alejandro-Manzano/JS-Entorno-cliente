function aleatorio() {
    let inputValue = document.getElementById("nbr").value; 
    let numVeces = [];
    for (let index = 0; index < inputValue; index++) {
        let ran =  Math.floor(Math.random() * 6) + 1; 
        numVeces.push(ran);
    }
    
    //contar cada uno
    let acc1=0,acc2=0,acc3=0,acc4=0,acc5=0,acc6=0;
    numVeces.forEach(element => {
        
        if (element == 1) {
            acc1++
        }
        if (element == 2) {
            acc2++
        }
        if (element == 3) {
            acc3++
        }
        if (element == 4) {
            acc4++
        }
        if (element == 5) {
            acc5++
        }
        if (element == 6) {
            acc6++
        }

    });

    document.getElementById("p1").innerHTML = "Cara 1: " +acc1;
    document.getElementById("p2").innerHTML = "Cara 2: " +acc2;
    document.getElementById("p3").innerHTML = "Cara 3: " +acc3;
    document.getElementById("p4").innerHTML = "Cara 4: " +acc4;
    document.getElementById("p5").innerHTML = "Cara 5: " +acc5;
    document.getElementById("p6").innerHTML = "Cara 6: " +acc6;
    
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function(event) {
    event.preventDefault(); 
    aleatorio(); 
});
