class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    if (fn) {
      fn(this.nombre, this.apellido)
    }
  }

  soyAlto(){
    return this.altura>1.8
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    if (fn) {
      fn(this.nombre, this.apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if(esDev) {
    console.log('Ah mirá, no sabía que eras dev');
    
  }
  
}

var aaron = new Persona('Aaron', 'Isaacs', 1.65)
var kathe = new Desarrollador('Katherine', 'Benitez', 1.70)
var arturo = new Desarrollador('Arturo', 'Zapata', 1.80)

aaron.saludar()
kathe.saludar(responderSaludo)
arturo.saludar(responderSaludo)

// var sacha = new Persona('Sacha', 'Lifzyc', 1.95)

// aaron.saludar()
// aaron.soyAlto()
// kathe.saludar()
// kathe.soyAlto()
// sacha.saludar()
// sacha.soyAlto()