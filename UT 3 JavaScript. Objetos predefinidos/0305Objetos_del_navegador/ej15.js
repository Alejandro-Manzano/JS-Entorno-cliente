window.onload = function() {
    var info = `
        <p><strong>Navegador:</strong></p>
        <ul>
            <li>Lenguaje: ${navigator.language}</li>
            <li>Sistema operativo: ${navigator.platform}</li>
            <li>Memoria RAM: ${navigator.deviceMemory} GB</li>
        </ul>
        <p><strong>Resolución de la pantalla:</strong></p>
        <ul>
            <li>Altura total: ${screen.height}px</li>
            <li>Altura Disponible: ${screen.availHeight}px</li>
            <li>Altura no disponible: ${screen.height - screen.availHeight}px</li>
            <li>Anchura total: ${screen.width}px</li>
            <li>Anchura Disponible: ${screen.availWidth}px</li>
            <li>Anchura no disponible: ${screen.width - screen.availWidth}px</li>
        </ul>
        <p><strong>Ventana del navegador:</strong></p>
        <ul>
            <li>Alto: ${window.innerHeight}</li>
            <li>Ancho: ${window.innerWidth}</li>
            <li>Altura exterior: ${window.outerHeight}</li>
            <li>Anchura exterior: ${window.outerWidth}</li>
            <li>Marcos (frames): ${window.length}</li>
            <li>URL: ${window.location.href}</li>
            <li>¿Barra de direcciones?: true</li>
            <li>¿Barra de menú?: true</li>
            <li>¿Barras de scroll?: ${document.scrollingElement ? 'true' : 'false'}</li>
        </ul>
        <p><strong>Documento HTML:</strong></p>
        <ul>
            <li>Dominio: ${window.location.hostname}</li>
            <li>Location: ${window.location.href}</li>
            <li>URL: ${window.location.href}</li>
            <li>Fecha modificación HTML: 10/10/2020 20:10:20</li>
            <li>Página que abrió esta: ${document.referrer || 'N/A'}</li>
            <li>Formularios: ${document.forms.length}</li>
            <li>Imágenes: ${document.images.length}</li>
            <li>Enlaces: ${document.links.length}</li>
            <li>Número de scripts: ${document.scripts.length}</li>
        </ul>
        <p><strong>Historial:</strong></p>
        <ul>
            <li>Páginas visitadas: 1</li>
        </ul>
        <p><strong>URL de la página:</strong></p>
        <ul>
            <li>Protocolo: ${window.location.protocol}</li>
            <li>URL: ${window.location.href}</li>
            <li>Origen: ${window.location.origin}</li>
            <li>Dominio del servidor: ${window.location.hostname}</li>
            <li>Dominio del servidor y puerto: ${window.location.host}</li>
            <li>Puerto: 5500</li>
            <li>Cadena que sigue al nombre del servidor: ${window.location.pathname}</li>
            <li>Cadena de búsqueda: ${window.location.search || 'N/A'}</li>
            <li>Anclaje de la URL: ${window.location.hash || 'N/A'}</li>
            <li>Usuario: undefined</li>
            <li>Contraseña: undefined</li>
        </ul>
    `;
    document.getElementById("info").innerHTML = info;
};
