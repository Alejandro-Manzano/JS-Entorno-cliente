function loadJsonFetch() {
    fetch('archivos/cd_catalog.json')
        .then(response => response.json())
        .then(data => {
            var output = '';
            data.forEach(cd => {
                output += cd.artist + '<br>';
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('btn3b').addEventListener('click', loadJsonFetch);