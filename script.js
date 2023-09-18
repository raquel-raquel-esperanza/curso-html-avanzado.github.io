

// Función para cargar contenido HTML desde una URL y colocarlo en un contenedor

function loadHTML(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        });
}

// Llama a la función loadHTML para cargar el encabezado y el pie de página
loadHTML("./template/header.html", "headercontainer");
loadHTML("./template/footer.html", "footercontainer");





