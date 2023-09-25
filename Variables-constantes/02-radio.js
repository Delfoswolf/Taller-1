const PI = 3.14159;

const radio = parseFloat(prompt("Ingrese el radio del circulo:"));


if (!isNaN(radio)) {
    const area = PI * radio * radio;
    console.log("El area del circulo con radio", radio, "es:", area);
    
} 
