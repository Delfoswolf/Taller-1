// Declara la constante PI
const PI = 3.14159;

// Pide al usuario que ingrese el radio del círculo
const radio = parseFloat(prompt("Ingrese el radio del círculo:"));

// Verifica si el usuario ingresó un número válido
if (!isNaN(radio)) {
    // Calcula el área del círculo
    const area = PI * radio * radio;

    // Muestra el resultado en la consola y en la página
    console.log("El área del círculo con radio", radio, "es:", area);
    
} 
