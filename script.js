/* Evento de color del Navbar */

const inicio = document.getElementById("inicio");
const hoy = document.getElementById("hoy");

inicio.addEventListener("click", () => {
    hoy.classList.remove("active");
    inicio.classList.add("active");
});

hoy.addEventListener("click", () => {
    inicio.classList.remove("active");
    hoy.classList.add("active");
});

// --------------------------------------------------------------------------------------------------

// JS del dropdown-menu 

// Get all dropdown menu items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Add event listener to each dropdown item
dropdownItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    // Remove active class from previous active item
    document.querySelector('.dropdown-item.active').classList.remove('active');
    // Add active class to current item
    item.classList.add('active');
  });

  // Set the first item as active
  if (index === 0) {
    item.classList.add('active');
  }
});

//Empieza botón de ayuda estatico
document.querySelector('#boton button').addEventListener('click', function() {
  let options=document.querySelector('.opciones');
  if(options.style.display=="none")
  options.style.display = 'block';
  else options.style.display="none"
});
//Termina botón de ayuda 
