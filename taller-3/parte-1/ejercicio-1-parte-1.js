const tamaño = 10;
const largo = 5;


for (let fila = 0; fila < tamaño; fila++) {
  // Comprobar si la fila es par
  if (fila % 2 === 0) {
    let asteriscos = '';
    for (let i = 0; i < tamaño; i++) {
      asteriscos += '*';
    }
    console.log(asteriscos);
  } else {
    console.log('          '); 
  }
}
