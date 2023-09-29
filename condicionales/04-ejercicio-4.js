function verificarParImpar(numero) {
    var mensaje = (numero % 2 === 0) ? "El número es par." : "El número es impar.";
    return mensaje;
  }
  
  var numeroIngresado = parseInt(prompt("Por favor, ingresa un número:"));
  
  var resultado = verificarParImpar(numeroIngresado);
  alert(resultado);
  
  