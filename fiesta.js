function capturar() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let asistencia = prompt("¿Vas a asistir a la fiesta de fin de año? (sí o no)");

    if (asistencia.toLowerCase() === "sí" || asistencia.toLowerCase() === "si") {
        alert("¡Genial, " + nombre + "! Nos vemos en la fiesta ");
    } else {
        alert("Una lástima, " + nombre + ". ¡Te esperamos la próxima!");
    }
}
