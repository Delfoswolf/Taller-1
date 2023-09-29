var x = parseFloat(prompt("Ingresa el valor de X:"));
var y = parseFloat(prompt("Ingresa el valor de Y:"));

if (x > 0 && y > 0) {
  alert("El punto se encuentra en el cuadrante 1.");
} else if (x > 0 && y < 0) {
  alert("El punto se encuentra en el cuadrante 2.");
} else if (x < 0 && y < 0) {
  alert("El punto se encuentra en el cuadrante 3.");
} else if (x < 0 && y > 0) {
  alert("El punto se encuentra en el cuadrante 4.");
} else if (x === 0 && y === 0) {
  alert("El punto se encuentra en el origen (punto (0,0)).");
} else {
  alert("El punto se encuentra en un eje (X o Y) o en una posición no estandar.");
}
