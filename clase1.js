var aaron = {
  nombre: 'Aaron',
  apellido: 'Isaacs',
  peso: 65,
}

console.log(`Al inicio del año ${aaron.nombre} pesaba ${aaron.peso}Kg`)

const INCREMENTO_DE_PESO = 0.2
const DIAS_DEL_AGNO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const disminuirPeso = persona => persona.peso -= INCREMENTO_DE_PESO

for (var i = 0; i < DIAS_DEL_AGNO; i++) {
  var random = Math.random()
  if(random < 0.25){
    aumentarDePeso(aaron)
  } else if(random < 0.5) {
    disminuirPeso(aaron)
  } 
}

console.log(`Al final del año ${aaron.nombre} pesaba ${aaron.peso.toFixed(1)}Kg`)