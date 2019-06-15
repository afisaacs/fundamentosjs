const winLoad = () => {
  btnStart = document.getElementById('btnstart')
  btnStart.addEventListener('click', startGame)
}

const startGame = ({ target }) => {
  let btnStart = target
  let btnIndigo = document.querySelector('.indigo')
  let btnPurple = document.querySelector('.purple')
  let btnAmber = document.querySelector('.amber')
  let btnLime = document.querySelector('.lime')

  console.log(btnStart)
  
  class Game {
    constructor () {
      this.init()
    }

    init() {
      btnStart.classList.add('hide')
    }
  }

  var game = new Game()

}

window.addEventListener('load', winLoad)