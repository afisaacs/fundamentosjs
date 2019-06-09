const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'

const obtenerPersoaje = (id, callback) => {
  const url = `${API_URL}${PEOPLE_URL}${id}`
  fetch(url)
  .then(response => response.json())
  .catch(error => console.log(error))
  .then(({ name }) => callback(name))
  .catch(error => console.log(error))
}

const mostrarPersonajes = (inicio, fin) => {
  obtenerPersoaje(inicio, name => {
    console.log(`hola, yo soy ${name}`)
    if (inicio < fin) {
      mostrarPersonajes(inicio+1, fin)
    } else {
      console.log('Fin')
    }
  })
}

mostrarPersonajes(1, 30)
