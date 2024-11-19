
let b1 = document.getElementById("b1");
let acc = 0;

function sumarClick() {
    acc++;
}

function restar() {
    acc = 0;
}

b1.addEventListener("click", function () {
    sumarClick();
    document.getElementById("p1").innerHTML = " ";
    document.getElementById("p1").innerHTML += "Clicks " +acc;
})

document.getElementById("b2").addEventListener("click", function () {
    restar();
    document.getElementById("p1").innerHTML = " ";
    document.getElementById("p1").innerHTML += "Clicks " +acc;
})