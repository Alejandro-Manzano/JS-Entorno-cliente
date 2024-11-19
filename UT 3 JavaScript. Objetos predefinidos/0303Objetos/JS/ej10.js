let p1 = document.getElementById("p-1");
p1.innerHTML += Number.MAX_VALUE;

let p2 = document.getElementById("p-2");
p2.innerHTML += Number.MIN_VALUE;

let p3 = document.getElementById("p-3");
p3.innerHTML += Number.MAX_SAFE_INTEGER;

let p4 = document.getElementById("p-4");
p4.innerHTML += Number.MIN_SAFE_INTEGER;

let x = 4 - "a";
let p5 = document.getElementById("p-5");
p5.innerHTML += x;

let p6 = document.getElementById("p-6");
p6.innerHTML += Number.POSITIVE_INFINITY;

let p7 = document.getElementById("p-7");
p7.innerHTML += Number.NEGATIVE_INFINITY;

let pi = Math.PI;
let p8 = document.getElementById("p-8");
p8.innerHTML += pi;

let p9 = document.getElementById("p-9");
p9.innerHTML += isFinite(pi);

let p10 = document.getElementById("p-10");
p10.innerHTML += Number.isInteger(pi);

let p11 = document.getElementById("p-11");
p11.innerHTML += Number.isSafeInteger(pi);

let p12 = document.getElementById("p-12");
p12.innerHTML += pi.toExponential();

let p13 = document.getElementById("p-13");
p13.innerHTML += pi.toExponential(4);

let p14 = document.getElementById("p-14");
p14.innerHTML += pi.toFixed(4);

let p15 = document.getElementById("p-15");
p15.innerHTML += pi.toFixed(3);

let pii = pi * 1000000;
let p16 = document.getElementById("p-16");
p16.innerHTML += pii.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });;

let p17 = document.getElementById("p-17");
p17.innerHTML += pii.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

let p18 = document.getElementById("p-18");
p18.innerHTML += pi.toFixed(2) + " €";
