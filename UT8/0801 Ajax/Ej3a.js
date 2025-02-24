function loadJsonXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'archivos/cd_catalog.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            var output = '';
            json.forEach(cd => {
                output += cd.artist + '<br>';
            });
            document.getElementById('output').innerHTML = output;
        }
    };
    xhr.send();
}

document.getElementById('btn3a').addEventListener('click', loadJsonXHR);
