
const temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));


if (!isNaN(temperaturaCelsius)) {
   
    let temperaturaFahrenheit;

    switch (true) {
        case (temperaturaCelsius < -273.15):
            temperaturaFahrenheit = "No es valida la temperatura.";
            break;
        default:
            temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
            break;
    }
   
    console.log("La temperatura en grados Celsius es: " + temperaturaCelsius + "°C");
    console.log("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit + "°F");
} 