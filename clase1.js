class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto(){
    return this.altura>1.8
  }
}


class Desarrollador extends Persona{
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }
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