const PI = 3.14159;

const radio = parseFloat(prompt("Ingrese el radio del círculo:"));


if (!isNaN(radio)) {
    const area = PI * radio * radio;
    console.log("El área del círculo con radio", radio, "es:", area);
    
} 
