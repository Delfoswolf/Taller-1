const numero = parseInt(prompt("Por favor, ingrese un numero:"));

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        alert("El numero ingresado (" + numero + ") es par.");
    } else {
        alert("El numero ingresado (" + numero + ") es impar.");
    }
} 
console.log(numero)