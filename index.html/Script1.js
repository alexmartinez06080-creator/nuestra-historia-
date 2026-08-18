const fechaInicio = new Date("2025-06-15T00:00:00");

function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        diferencia / (1000 * 60 * 60)
    ) % 24;

    const minutos = Math.floor(
        diferencia / (1000 * 60)
    ) % 60;

    const segundos = Math.floor(
        diferencia / 1000
    ) % 60;

    const contador = document.getElementById("contador");

    if (contador) {
        contador.innerHTML = `
            ❤️ ${66} días ❤️
            <br>
            <span style="font-size:18px;">
                ${17} horas,
                ${30} minutos y
                ${15} segundos
            </span>
        `;
    }
}

actualizarContador();

setInterval(actualizarContador, 1000);