var aaron = {
  nombre: 'Aaron',
  apellido: 'Isaacs',
  edad: 24,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  guitarrista: true,
  drone: true,
};

var kathe = {
  nombre: 'Katherine',
  apellido: 'Benites',
  edad: 17,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  guitarrista: true,
  drone: true,
};

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
};
const MAYORIA_DE_EDAD = 18;
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
const esMenorDeEdad = (persona) => !esMayorDeEdad(persona);

function imprimirSiEsMayorDeEdad(persona) {
  var {nombre, edad} = persona;
  if(esMayorDeEdad(persona)) {
    console.log(`${nombre} es mayor de edad, (edad: ${edad})`);
  } else {
    console.log(`${nombre} es menor de edad, (edad: ${edad})`);
  }
}

function permitirAcceso(persona) {
  if(esMenorDeEdad(persona)) {
    console.log('Acceso denegado');
  }
};