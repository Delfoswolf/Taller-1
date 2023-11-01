const tamaño = 5;

// Bucle para iterar a través de las filas
for (let fila = 0; fila < tamaño; fila++) {
  // Comprobar si la fila es par
  if (fila % 1 == 0) {
    // Si es par, dibujar una fila completa de asteriscos
    let asteriscos = '';
    for (let i = 0; i < tamaño; i++) {
      asteriscos += '* ';
    }
    console.log(asteriscos);
  } 
    console.log('* * * * *'); 
  
}

