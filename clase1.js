var aaron = {
  nombre: 'Aaron',
  apellido: 'Isaacs',
  edad: 24,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  guitarrista: true,
  drone: true,
}

imprimirProfesiones(aaron);

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if(persona.ingeniero) {
    console.log('Ingeniero');
  }
  if(persona.cocinero) {
    console.log('Cocinero');
  }
  if(persona.cantante) {
    console.log('Cantante');
  }
  if(persona.guitarrista) {
    console.log('Guitarrista');
  }
  if(persona.drone) {
    console.log('Piloto de drone');
  }
}

function imprimirSiEsMayorDeEdad(persona) {
  //Aaron es mayor de edad Sacha es menor de edad
  var {nombre, edad} = persona;
  if(edad < 18) {
    console.log(`${nombre} es menor de edad, (edad: ${edad})`);
  } else {
    console.log(`${nombre} es mayor de edad, (edad: ${edad})`);
  }
}