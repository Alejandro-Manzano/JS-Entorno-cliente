function loadTxtFetch() {
    fetch('archivos/ajax_info.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('btn1b').addEventListener('click', loadTxtFetch);