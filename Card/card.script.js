const searchSection = document.querySelector(".search-section");
const closeIcon = document.querySelector(".close-icon");
const closeIconFaTimes = document.querySelector('.close-icon i.fa-times');
const modal = document.querySelector(".modal");

// Get the element with class 
const contViaje = document.querySelector('.cont-viaje');
const contArtMan = document.querySelector('.cont-arte-manga');
const contFonPan = document.querySelector('.cont-fondo-pantalla');
const contCoches = document.querySelector('.cont-coches');
const contFotos = document.querySelector('.cont-fotos');
const contIlustraciones = document.querySelector('.cont-ilustraciones');
const contDibujos = document.querySelector('.cont-dibujos');
const contCelular = document.querySelector('.cont-celular');
const contAesthetic = document.querySelector('.cont-aesthetic');
const contFotosPerfil = document.querySelector('.cont-fotos-perfil');
const contEspaArt = document.querySelector('.cont-espa-art');
const contGames = document.querySelector('.cont-games');

// Section Card Viajes
contViaje.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {

    if (!imgElement.classList.contains('viajes-img') && !imgElement.classList.contains('img-searchbar')) {

      imgElement.style.display = "none";

    }

  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const viajesImgElements = document.querySelectorAll('viajes-img');
  viajesImgElements.forEach(function (viajeImgElement) {
    viajeImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // Do nothing to maintain original CSS styles
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Arte-Manga
contArtMan.addEventListener('click', function () {

  // Get all img elements on the page
  const imgElements = document.querySelectorAll('img');

  // Loop through each image
  imgElements.forEach(function (imgElement) {

    // If the image doesn't have the class arte-manga-img or img-searchbar
    if (!imgElement.classList.contains('arte-manga-img') && !imgElement.classList.contains('img-searchbar')) {
      // Remove the image
      imgElement.style.display = "none";
    }

  });

  // Get the container element
  const containerElement = document.querySelector('.grid-container');

  // Remove the images that have been hidden
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  // Remove the Masonry object
  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  // Loop through each viajes-img element and set the width to auto
  const artManImgElements = document.querySelectorAll('.arte-manga-img');
  artManImgElements.forEach(function (artManImgElement) {
    artManImgElement.style.width = "auto";
  });

  // Loop through each img-searchbar element and set the width to 100%
  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // Do nothing to maintain original CSS styles
  });

  // Initialize Masonry again
  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  // Hide search section, modal, and show close icon
  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Fondos de pantalla
contFonPan.addEventListener('click', function () {

  // Get all img elements on the page
  const imgElements = document.querySelectorAll('img');

  // Loop through each image
  imgElements.forEach(function (imgElement) {

    // If the image doesn't have the class arte-manga-img or img-searchbar
    if (!imgElement.classList.contains('wallpaper-img') && !imgElement.classList.contains('img-searchbar')) {
      // Remove the image
      imgElement.style.display = "none";
    }

  });

  // Get the container element
  const containerElement = document.querySelector('.grid-container');

  // Remove the images that have been hidden
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  // Remove the Masonry object
  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  // Loop through each viajes-img element and set the width to auto
  const fonPanImgElements = document.querySelectorAll('.wallpaper-img');
  fonPanImgElements.forEach(function (fonPanImgElement) {
    fonPanImgElement.style.width = "auto";
  });

  // Loop through each img-searchbar element and set the width to 100%
  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // Do nothing to maintain original CSS styles
  });

  // Initialize Masonry again
  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  // Hide search section, modal, and show close icon
  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Coches
contCoches.addEventListener('click', function () {
  // Get all img elements on the page
  const imgElements = document.querySelectorAll('img');

  // Loop through each image
  imgElements.forEach(function (imgElement) {

    // If the image doesn't have the class arte-manga-img or img-searchbar
    if (!imgElement.classList.contains('coches-img') && !imgElement.classList.contains('img-searchbar')) {
      // Remove the image
      imgElement.style.display = "none";
    }

  });

  // Get the container element
  const containerElement = document.querySelector('.grid-container');

  // Remove the images that have been hidden
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  // Remove the Masonry object
  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  // Loop through each viajes-img element and set the width to auto
  const cocheImgElements = document.querySelectorAll('.coches-img');
  cocheImgElements.forEach(function (cocheImgElement) {
    cocheImgElement.style.width = "auto";
  });

  // Loop through each img-searchbar element and set the width to 100%
  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // Do nothing to maintain original CSS styles
  });

  // Initialize Masonry again
  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  // Hide search section, modal, and show close icon
  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Fotos
contFotos.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');
  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('foto-compartir-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const ilustracionesImgElements = document.querySelectorAll('.foto-compartir-img');
  ilustracionesImgElements.forEach(function (ilustracionesImgElement) {
    ilustracionesImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Ilustraciones
contIlustraciones.addEventListener('click', function () {
  const imgElements = document.querySelectorAll('img');
  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('ilustraciones-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const ilustracionesImgElements = document.querySelectorAll('.ilustraciones-img');
  ilustracionesImgElements.forEach(function (ilustracionesImgElement) {
    ilustracionesImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Dibujos
contDibujos.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('dibujos-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const dibujosImgElements = document.querySelectorAll('.dibujos-img');
  dibujosImgElements.forEach(function (dibujosImgElement) {
    dibujosImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Wallpaper-Celular
contCelular.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('wall-celular-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const wallCelularImgElements = document.querySelectorAll('.wall-celular-img');
  wallCelularImgElements.forEach(function (wallCelularImgElement) {
    wallCelularImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Wallpaper-Aesthetic
contAesthetic.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('wall-aesthetic-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const wallAestheticImgElements = document.querySelectorAll('.wall-aesthetic-img');
  wallAestheticImgElements.forEach(function (wallAestheticImgElement) {
    wallAestheticImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Fotos-Perfil
contFotosPerfil.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('foto-perfil-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const fotoPerfilImgElements = document.querySelectorAll('.foto-perfil-img');
  fotoPerfilImgElements.forEach(function (fotoPerfilImgElement) {
    fotoPerfilImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Espacio-Artistico
contEspaArt.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('espa-art-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const espaArtImgElements = document.querySelectorAll('.espa-art-img');
  espaArtImgElements.forEach(function (espaArtImgElement) {
    espaArtImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Games
contGames.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('games-img') && !imgElement.classList.contains('img-searchbar')) {
      imgElement.style.display = "none";
    }
  });

  const containerElement = document.querySelector('.grid-container');
  const masonryElements = containerElement.querySelectorAll('.grid-item:not([style*="display: none"])');

  let msnry = Masonry.data(containerElement);
  msnry.destroy();

  const gamesImgElements = document.querySelectorAll('.games-img');
  gamesImgElements.forEach(function (gamesImgElement) {
    gamesImgElement.style.width = "auto";
  });

  const searchbarImgElements = document.querySelectorAll('.img-searchbar');
  searchbarImgElements.forEach(function (searchbarImgElement) {
    // No hacer nada para mantener los estilos CSS originales
  });

  msnry = new Masonry(containerElement, {
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

function closeSearchSection() {
  location.reload();
}

// Agregar evento click al icono de cerrar
const closeIcon2 = document.querySelector('.close-icon');
closeIcon2.addEventListener('click', closeSearchSection);

// ------------------------------------------------------------------------------------------------------------------------------



