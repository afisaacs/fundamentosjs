const horoscopos = {
  aries: '21 marzo - 19 abril',
  tauro: '20 abril - 20 mayo',
  geminis: '21 mayo - 20 junio',
  cancer: '21 junio - 22 julio',
  leo: '23 julio - 22 agosto',
  virgo: '23 agosto - 22 septiembre',
  libra:'23 septiembre - 22 octubre',
  escorpion: '23 octubre - 21 noviembre',
  sagitario: '22 noviembre - 21 diciembre',
  capricornio: '22 diciember - 19 enero',
  acuario: '20 enero - 18 febrero',
  piscis: '19 febrero - 20 marzo',
};

const imprimirSigno = (signo) => console.log(horoscopos[signo]?horoscopos[signo]:'El signo no existe');
let signo
do {
  signo = prompt('¿Cuál es tu signo?')
  imprimirSigno(signo);
} while(signo && signo !== 'salir')