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

function imprimirNombreEnMayuscula(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  }
}