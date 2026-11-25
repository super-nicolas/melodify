
function mostrarPagina(nombre) {

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(pagina => {
        pagina.classList.remove("activa");
    });

    document.getElementById(nombre).classList.add("activa");
}

function toggleMenu() {
    const menu = document.getElementById("menuDesplegable");

    menu.classList.toggle("abierto");
}

function mostrarPagina(nombre) {

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(pagina => {
        pagina.classList.remove("activa");
    });

    document.getElementById(nombre).classList.add("activa");

    document.getElementById("menuDesplegable")
        .classList.remove("abierto");
}
