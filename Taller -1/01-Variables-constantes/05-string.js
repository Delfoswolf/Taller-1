const textoLargo = "Cadena de texto.";

const longitudCadena = textoLargo.length;

const textoEnMinusculas = textoLargo.toLowerCase();

const palabras = textoLargo.split(" ");

const ultimaPalabra = palabras[palabras.length - 1].toUpperCase();

console.log("Longitud de la cadena: " + longitudCadena + " caracteres");
console.log("Cadena en minusculas: " + textoEnMinusculas);
console.log("Ultima palabra en mayusculas: " + ultimaPalabra);


