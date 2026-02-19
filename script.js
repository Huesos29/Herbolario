document.addEventListener("DOMContentLoaded", function () {

    /* Animación de entrada */
    const tarjetas = document.querySelectorAll(".tarjeta-especie");

    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.opacity = 0;
        tarjeta.style.transform = "translateY(20px)";

        setTimeout(() => {
            tarjeta.style.transition = "all 0.6s ease";
            tarjeta.style.opacity = 1;
            tarjeta.style.transform = "translateY(0)";
        }, index * 150);
    });

    /* Barra de búsqueda */
    const buscador = document.getElementById("busqueda");

    if (buscador) {
        buscador.addEventListener("keyup", function () {

            let filtro = this.value.toLowerCase();

            tarjetas.forEach(function (tarjeta) {
                let texto = tarjeta.textContent.toLowerCase();

                tarjeta.style.display = texto.includes(filtro) ? "flex" : "none";
            });

        });
    }

});




/*Funcion boton */

function toggleReferencias() {
    const box = document.getElementById("referencias");
    const flecha = document.getElementById("flecha");

    box.classList.toggle("activo");
    flecha.classList.toggle("rotar");
}


