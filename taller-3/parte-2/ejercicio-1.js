const ladoCuadrado = 10;

for (let i = 1; i <= ladoCuadrado; i++) {
  let linea = '';
  for (let j = 1; j <= i; j++) {
    linea += '*';
  }
  console.log(linea);
}
