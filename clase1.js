var aaron = {
  nombre: 'Aaron',
  apellido: 'Isaacs',
  edad: 28,
};

var dario = {
  nombre: 'Dario',
  apellido: 'Sunsnisky',
  edad: 27,
}

imprimirNombreEnMayuscula(aaron);
imprimirNombreEnMayuscula(dario);
imprimirNombreEnMayuscula({ nombre: 'Pepito' });
imprimirNombreEnMayuscula();

function imprimirNombreEnMayuscula({ nombre }) {
  console.log(nombre.toUpperCase());
}