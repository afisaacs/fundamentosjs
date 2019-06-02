var aaron = {
  nombre: 'Aaron',
  apellido: 'Isaacs',
  peso: 65,
}

console.log(`Al inicio del año ${aaron.nombre} pesaba ${aaron.peso}Kg`)

const FACTOR_DE__CAMBIO_PESO = 0.3, DIAS_DEL_AGNO = 365, META = aaron.peso - 3;
var dias = 0;

const aumentarDePeso = persona => persona.peso += FACTOR_DE__CAMBIO_PESO
const disminuirDePeso = persona => persona.peso -= FACTOR_DE__CAMBIO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while (aaron.peso > META) {
  if(comeMucho()){
    aumentarDePeso(aaron)
  }
  if(realizaDeporte()) {
    disminuirDePeso(aaron)
  }
  dias++;
}

console.log(`Pasarion ${dias} hasta que ${aaron.nombre} adelgazó 3Kg, nuevo peso: ${aaron.peso.toFixed(1)}`)