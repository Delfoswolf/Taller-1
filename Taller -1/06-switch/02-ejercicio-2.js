var mes = parseInt(prompt("Por favor, ingresa un numero de mes (1-12):"));

var diasEnElMes;

switch (mes) {
  case 1: // enero
  case 3: // marzo
  case 5: // mayo
  case 7: // julio
  case 8: // agosto
  case 10: // octubre
  case 12: // diciembre
    diasEnElMes = 31;
    break;
  case 4: // abril
  case 6: // junio
  case 9: // septiembre
  case 11: // noviembre
    diasEnElMes = 30;
    break;
  case 2: // febrero

    var anio = new Date().getFullYear();
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
      diasEnElMes = 29;
    } else {
      diasEnElMes = 28;
    }
    break;
  default:
    alert("Por favor, ingresa un numero de mes válido (1-12).");
}

if (diasEnElMes) {
  alert("El mes " + mes + " tiene " + diasEnElMes + " dias.");
}
