function loadXmlXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'archivos/cd_catalog.xml', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xmlDoc = xhr.responseXML;
            var artists = xmlDoc.getElementsByTagName('ARTIST');
            var output = '';
            for (var i = 0; i < artists.length; i++) {
                output += artists[i].textContent + '<br>';
            }
            document.getElementById('output').innerHTML = output;
        }
    };
    xhr.send();
}

document.getElementById('btn2a').addEventListener('click', loadXmlXHR);