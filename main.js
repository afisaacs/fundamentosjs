const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'

const obtenerPersoaje = (id) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL}${id}`
    $.get(url, {}, (data) => resolve(data))
    .fail(() => reject(id))
  })
}

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let promesas = ids.map(id => obtenerPersoaje(id))

Promise
.all(promesas)
.then(personajes => personajes.forEach( (personaje, index) => console.log(`Hola, soy el personaje ${index} y mi nombre es ${personaje.name}`) ))
.catch(error => console.log(error))