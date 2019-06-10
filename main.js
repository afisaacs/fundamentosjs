const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'

const obtenerPersoaje = (id) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL}${id}`
    $.get(url, {}, (data) => resolve(data))
    .fail(() => reject(id))
  })
}

const mostrarPersonajes = (inicio, fin) => {
  obtenerPersoaje(inicio)
  .then(({ name }) => {
    console.log(`El personaje ${inicio} es ${name}`)
    if (inicio < fin) {
      mostrarPersonajes(inicio+1, fin)
    }
  })
  .catch(id => console.log(`Sucedió un error al obtener el personaje  ${id}`))
}

mostrarPersonajes(1, 30)
