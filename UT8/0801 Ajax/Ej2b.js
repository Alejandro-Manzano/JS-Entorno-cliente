function loadXmlFetch() {
    fetch('archivos/cd_catalog.xml')
        .then(response => response.text())
        .then(str => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(str, 'text/xml');
            var artists = xmlDoc.getElementsByTagName('ARTIST');
            var output = '';
            for (var i = 0; i < artists.length; i++) {
                output += artists[i].textContent + '<br>';
            }
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('btn2b').addEventListener('click', loadXmlFetch);