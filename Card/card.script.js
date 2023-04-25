const searchSection = document.querySelector(".search-section");
const closeIcon = document.querySelector(".close-icon");
const closeIconFaTimes = document.querySelector('.close-icon i.fa-times');
const modal = document.querySelector(".modal");

// Get the element with class 
const contViaje = document.querySelector('.cont-viaje');
const contArtMan = document.querySelector('.cont-arte-manga');
const contFonPan = document.querySelector('.cont-fondo-pantalla');

// Seccion Card Viajes
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

// Seccion Card Arte-Manga
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

// Seccion Card Fondos de pantalla

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

function closeSearchSection() {
  location.reload();
}

// Agregar evento click al icono de cerrar
const closeIcon2 = document.querySelector('.close-icon');
closeIcon2.addEventListener('click', closeSearchSection);

// ------------------------------------------------------------------------------------------------------------------------------



