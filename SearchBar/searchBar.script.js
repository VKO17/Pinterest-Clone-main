
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

