

const ladoCuadrado = 10;

for (let i = 0; i < ladoCuadrado; i++) {
  let linea = '';
  for (let j = 0; j < ladoCuadrado; j++) {
    if (j === ladoCuadrado - i - 1) {
      linea += '*';
    } else {
      linea += ' ';
    }
  }
  console.log(linea);
}