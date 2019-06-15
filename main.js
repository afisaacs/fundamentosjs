const winLoad = () => {
  btnStart = document.getElementById('btnstart')
  btnStart.addEventListener('click', startGame)
}

const startGame = ({ target }) => {
  let btnStart = target
  let indigo = document.querySelector('.indigo')
  let purple = document.querySelector('.purple')
  let amber = document.querySelector('.amber')
  let lime = document.querySelector('.lime')

  class Game {
    constructor () {
      this.init()
      this.generateSecuence()
    }

    init() {
      btnStart.classList.add('hide')
      this.level = 1
      this.colors = {indigo, purple, amber, lime}
    }
    generateSecuence() {
      this.secuence = new Array(10).fill(0).map(() => Math.floor(Math.random()*4))
    }
  }

  window.game = new Game()
}

window.addEventListener('load', winLoad)