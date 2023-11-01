var nombre = prompt("Por favor, ingresa tu nombre:");

var genero = prompt("Por favor, ingresa tu genero (chico o chica):");

var precioBase = 7;

var precioFinal;

if (genero.toLowerCase() === 'chico') {
  precioFinal = precioBase * 2;
  alert(nombre + ", tu entrada a la disco vale $" + precioFinal + " dolares");
} else if (genero.toLowerCase() === 'chica') {
  precioFinal = precioBase / 2;
  alert(nombre + ", tu entrada a la disco vale $" + precioFinal + " dolares");
} else {
  alert("Lo siento, el género ingresado no es valido.");
}
