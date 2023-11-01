const tamano = 10;

let cuadrado = '';

for (let i = 0; i < tamano; i++) {
  for (let j = 0; j < tamano; j++) {
    // Si la posición actual es diagonal, agrega un asterisco, de lo contrario agrega un espacio en blanco
    if (i === j) {
      cuadrado += '*';
    } else {
      cuadrado += ' ';
    }
  }
  cuadrado += '\n';
}


console.log(cuadrado);


// const tamano = 10;

// let cuadrado = ' ';

// for (let i = 0; )