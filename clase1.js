function HeredaDe(PrototipoHijo, PrototipoPadre) {
  var fn = function () {}
  fn.prototype = PrototipoPadre.prototype
  PrototipoHijo.prototype = new fn
  PrototipoHijo.prototype.constructor = PrototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

function Desarrollador(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto =  () => {
  return this.altura>1.8
}
HeredaDe(Desarrollador, Persona)
Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var aaron = new Persona('Aaron', 'Isaacs', 1.65)
var kathe = new Desarrollador('Katherine', 'Benitez', 1.70)
// var sacha = new Persona('Sacha', 'Lifzyc', 1.95)

// aaron.saludar()
// aaron.soyAlto()
// kathe.saludar()
// kathe.soyAlto()
// sacha.saludar()
// sacha.soyAlto()