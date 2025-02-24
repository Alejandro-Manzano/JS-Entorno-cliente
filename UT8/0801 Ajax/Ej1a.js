
function loadTxtXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'archivos/ajax_info.txt', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('output').innerText = xhr.responseText;
        }
    };
    xhr.send();
}

document.getElementById('btn1a').addEventListener('click', loadTxtXHR);


