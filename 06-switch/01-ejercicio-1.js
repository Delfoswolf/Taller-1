// Solicitar al usuario que ingrese tres notas
var nota1 = parseFloat(prompt("Ingresa la primera nota (0-5):"));
var nota2 = parseFloat(prompt("Ingresa la segunda nota (0-5):"));
var nota3 = parseFloat(prompt("Ingresa la tercera nota (0-5):"));

// Calcular el promedio de las notas
var promedio = (nota1 + nota2 + nota3) / 3;

switch (true) {
  case (promedio < 2.5):
    alert("Calificación: Insuficiente, has perdido la materia.");
    break;
  case (promedio >= 2.5 && promedio < 3.5):
    alert("Calificación: Insuficiente, tienes derecho a habilitar.");
    break;
  case (promedio >= 3.5 && promedio < 4.0):
    alert("Calificación: Aceptable.");
    break;
  case (promedio >= 4.0 && promedio <= 5.0):
    alert("Calificación: Excelente.");
    break;
  default:
    alert("Por favor, ingresa notas válidas en el rango de 0 a 5.");
}
