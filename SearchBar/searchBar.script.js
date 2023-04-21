function toggleSection() {
    var section = document.querySelector('.search-section');
    if (section.classList.contains('show-section')) {
        section.classList.remove('show-section');
    } else {
        section.classList.add('show-section');
    }
}

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

