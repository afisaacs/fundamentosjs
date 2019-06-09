const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'
const opts = { crossDomain: true }

// const onPeopleResponse = ({ name }) => console.log(`hola, yo soy ${name}`)
const obtenerPersoaje = (id, callback) => {
  const url = `${API_URL}${PEOPLE_URL}${id}`
  fetch(url)
  .then(response => response.json())
  .then(({ name }) => {
    console.log(`hola, yo soy ${name}`)
    if (callback) {
      callback()
    }
  })
}

const mostrarPersonajes = (inicio, fin) => {
  obtenerPersoaje(inicio, () => {
    if (inicio < fin) {
      mostrarPersonajes(inicio+1, fin)
    } else {
      console.log('Fin')
    }
  })
}

mostrarPersonajes(1, 10)

// obtenerPersoaje(1, 
//   () => obtenerPersoaje(2, 
//     () => obtenerPersoaje(3, 
//       () => obtenerPersoaje(4,
//         () => obtenerPersoaje(5,
//           () => obtenerPersoaje(6,
//             () => obtenerPersoaje(7,
//               () => console.log('Fin')
//             )
//           )
//         )
//       )
//     )
//   )
// )
