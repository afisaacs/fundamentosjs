const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'

const obtenerPersoaje = (id) => {

  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL}${id}`
    $.get(url, {}, (data) => resolve(data))
    .fail(() => reject(id))
  })
}

obtenerPersoaje(1)
.then(({ name }) => console.log(`El personaje 1 es ${name}`))
.catch(id => console.log(`Sucedió un error al obtener el personaje  ${id}`))

// const mostrarPersonajes = (inicio, fin) => {
//   obtenerPersoaje(inicio, name => {
//     console.log(`hola, yo soy ${name}`)
//     if (inicio < fin) {
//       mostrarPersonajes(inicio+1, fin)
//     } else {
//       console.log('Fin')
//     }
//   })
// }

// mostrarPersonajes(1, 30)
