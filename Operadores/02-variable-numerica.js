const numero1 = 10;

const numero2 = parseFloat(prompt("Ingrese un valor:"));

if (!isNaN(numero2)) {
       if (numero1 === numero2) {
        console.log("Los numeros son iguales.");
    } else if (numero1 > numero2) {
        console.log("El primer numero es mayor que el segundo.");
    } else {
        console.log("El segundo numero es mayor que el primero.");
    }
} else {
        console.log("Por favor, ingrese un numero valido.");
}
