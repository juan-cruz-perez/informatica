const NUMERO_SECRETO = 55; 
function iniciarJuego() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = '';
    resultadoDiv.className = '';
    const intentoUsuario = prompt("¡Adivina el número secreto! Introduce un número entero:");
    if (intentoUsuario === null || intentoUsuario.trim() === "") {
        resultadoDiv.textContent = "Juego cancelado. ¡Vuelve a intentarlo cuando quieras!";
        resultadoDiv.className = ""; 
        return; 
    }
    const numeroAdivinado = parseInt(intentoUsuario);
    if (isNaN(numeroAdivinado)) {
        resultadoDiv.textContent = `"${intentoUsuario}" no es un número válido. Por favor, introduce un número.`;
        resultadoDiv.className = "fallo";
        return;
    }
    if (numeroAdivinado === NUMERO_SECRETO) {
        resultadoDiv.textContent = `¡Felicidades! Has adivinado el número secreto (${NUMERO_SECRETO}).`;
        resultadoDiv.classList.add('acierto');
    } else {
        let mensaje = `¡Incorrecto! El número que introdujiste (${numeroAdivinado}) no es el secreto.`;
        if (numeroAdivinado < NUMERO_SECRETO) {
            mensaje += " Intenta con un número mayor.";
        } else {
            mensaje += " Intenta con un número menor.";
        }
        resultadoDiv.textContent = mensaje;
        resultadoDiv.classList.add('fallo');
    }
}