/* Evento del despliegue de la search-bar */


// Esperar a que el DOM termine de cargarse
document.addEventListener('DOMContentLoaded', function () {

    // Obtener la sección de búsqueda y la barra de búsqueda
    var searchSection = document.querySelector('.search-section');
    var searchInput = document.querySelector('.search-form input[type="search"]');

    // Agregar un controlador de eventos al documento completo
    document.addEventListener('click', function (event) {

        // Verificar si el clic ocurrió dentro o fuera de la sección de búsqueda
        if (event.target !== searchSection && event.target !== searchInput) {

            // Si el clic ocurrió fuera de la sección de búsqueda, cerrarla y cambiar el color de fondo
            searchSection.classList.remove('open');
            document.body.style.backgroundColor = '#ffffff';
        }
    });

    // Agregar un controlador de eventos a la barra de búsqueda
    searchInput.addEventListener('click', function (event) {

        // Si la sección de búsqueda no está abierta, abrirla y cambiar el color de fondo
        if (!searchSection.classList.contains('open')) {
            searchSection.classList.add('open');
            document.body.style.backgroundColor = '#999999';
        }

        // Detener la propagación del evento para evitar que se cierre la sección de búsqueda
        event.stopPropagation();
    });

});



