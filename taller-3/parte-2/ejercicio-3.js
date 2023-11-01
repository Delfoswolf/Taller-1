const ladoCuadrado = 10;

for (let i = ladoCuadrado; i >= 1; i--) {
  let linea = '';
  for (let j = 1; j <= ladoCuadrado - i; j++) {
    linea += ' ';
  }
  for (let k = 1; k <= i; k++) {
    linea += '*';
  }
  console.log(linea);
}
