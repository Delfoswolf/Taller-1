const base = parseFloat(prompt("Ingrese la base del triangulo:"));

const altura = parseFloat(prompt("Ingrese la altura del triangulo:"));

if (!isNaN(base) && !isNaN(altura)) {
    const area = (base * altura) / 2;

    alert("El area del triangulo es: " + area);
} else {
    alert("Por favor, ingrese valores numericos validos.");
}
