var nombre = 'sacha', edad = 28;
imprimirEdad(nombre, edad);

function imprimirEdad(n, e=25) {
  console.log(`${n} tiene ${e} años`);
}