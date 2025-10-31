function calcularPromedio() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    let promedio = (n1 + n2 + n3) / 3;

    let mensaje = "Tu promedio es " + promedio.toFixed(2) + ". ";

    if (promedio >= 6) {
        mensaje += "¡Aprobaste! 🎉";
    } else {
        mensaje += "Necesitás repasar. 📚";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}
