const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = ({ name }) => console.log(`hola yo soy ${name}`)

$.get(lukeUrl, opts, luke => onPeopleResponse(luke))
