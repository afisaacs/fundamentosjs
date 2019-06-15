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
      this.nextLevel()
    }

    init() {
      btnStart.parentElement.classList.add('hide')
      this.level = 7
      this.colors = {indigo, purple, amber, lime}
    }
    generateSecuence() {
      this.secuence = new Array(10).fill(0).map(() => Math.floor(Math.random()*4))
    }
    nextLevel() {
      this.iluminateSecuency()
      this.addClickEvent()
    }
    async iluminateSecuency() {
      for (let index = 0; index < this.level; index++) {
        let color = this.numberToColor(this.secuence[index])
        await this.iluminateColor(color)
        await this.delay(300)
      }
    }
    numberToColor(number) {
      const mapNumberColor = {
        0: this.colors.indigo,
        1: this.colors.purple,
        2: this.colors.amber,
        3: this.colors.lime
      }
      return mapNumberColor[number]
    }
    iluminateColor(color) {
      return new Promise(resolve => {
        color.classList.add('light')
        setTimeout(() => {
          color.classList.remove('light')
          resolve()
        }, 350)
      })
    }
    delay(number) {
      return new Promise(resolve => setTimeout(() => resolve(), number))
    }
    addClickEvent() {
      Object.keys(this.colors).forEach(color => this.colors[color].addEventListener('click', event => this.chooseColor(event)))
    }
    chooseColor({ target }) { 
      console.log(target)
      console.log(this)
    }
  }

  window.game = new Game()
}

window.addEventListener('load', winLoad)