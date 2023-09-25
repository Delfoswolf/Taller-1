const numero1 = parseFloat(prompt("Ingrese el primer numero:"));

const numero2 = parseFloat(prompt("Ingrese el segundo numero:"));

let suma;

if (!isNaN(numero1) && !isNaN(numero2)) {
      suma = numero1 + numero2;

      console.log("La suma de " + numero1 + " y " + numero2 + " es igual a: " + suma);
}