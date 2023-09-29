const numero1 = parseFloat(prompt("Ingrese el primer numero:"));

const numero2 = parseFloat(prompt("Ingrese el segundo numero:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
   
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;

    let division;
    if (numero2 !== 0) {
        division = numero1 / numero2;
    } else {
        division = "La division por 0 no existe.";
    }

        console.log("Suma: " + suma);
    console.log("Resta: " + resta);
    console.log("Multiplicacion: " + multiplicacion);
    console.log("Division: " + division);
} 