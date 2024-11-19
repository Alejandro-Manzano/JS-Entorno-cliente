function realizarOperaciones() {

    const frase = document.getElementById("frase").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ''; 

    const palabras = frase.split(' ').filter(palabra => palabra !== '');
    const numeroPalabras = palabras.length;


    const fraseConPrimeraMayus = frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase();


    const primeraPalabra = palabras[0];
    const ultimaPalabra = palabras[palabras.length - 1];

    let ahorcado = '';
    palabras.forEach(palabra => {
        if (palabra.length > 2) {
            ahorcado += palabra[0] + '_'.repeat(palabra.length - 2) + palabra[palabra.length - 1] + ' ';
        } else {
            ahorcado += palabra + ' '; 
        }
    });

    const fraseSinEspacios = frase.replace(/\s+/g, '').toLowerCase();
    const esPalindromo = fraseSinEspacios === fraseSinEspacios.split('').reverse().join('');

    // Mostrar resultados
    resultado.innerHTML += `<p><strong>Frase:</strong> ${frase}</p>`;
    resultado.innerHTML += `<p><strong>a)</strong> Número de palabras: ${numeroPalabras}</p>`;
    resultado.innerHTML += `<p><strong>b)</strong> Primera letra en mayúsculas, resto minúsculas: ${fraseConPrimeraMayus}</p>`;
    resultado.innerHTML += `<p><strong>c)</strong> Primera palabra: ${primeraPalabra}, última palabra: ${ultimaPalabra}</p>`;
    resultado.innerHTML += `<p><strong>d)</strong> Ahorcado: ${ahorcado.trim()}</p>`;
    resultado.innerHTML += `<p><strong>e)</strong> Palíndromo: ${esPalindromo ? 'Sí' : 'No'}</p>`;
}
