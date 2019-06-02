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

imprimirNombreYEdad(aaron);
imprimirNombreYEdad(dario);
imprimirNombreYEdad({ nombre: 'Pepito', edad: 20 });

imprimirNombreYEdad2(aaron);
imprimirNombreYEdad2(dario);
imprimirNombreYEdad2({ nombre: 'Pepito', edad: 20 });

function imprimirNombreEnMayuscula(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
  //Hola, me llamo NOMBRE y tengo EDAD años
  var {nombre, edad} = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

function imprimirNombreYEdad2({nombre, edad}) {
  //Hola, me llamo NOMBRE y tengo EDAD años
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}