const ladoCuadrado = 10;

for (let i = 1; i <= ladoCuadrado; i++) {
  let linea = '';
  for (let j = 1; j <= ladoCuadrado - i; j++) {
    linea += ' ';
  }
  for (let k = 1; k <= i; k++) {
    linea += '*';
  }
  console.log(linea);
}