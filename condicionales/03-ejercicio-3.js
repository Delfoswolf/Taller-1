var edad = parseInt(prompt("Por favor, ingresa tu edad:"));

if (edad < 0) {
  alert("Por favor, ingresa una edad valida.");
} else if (edad < 13) {
  alert("Eres un niño.");
} else if (edad < 18) {
  alert("Eres un adolescente.");
} else {
  alert("Eres un adulto.");
}
