const winLoad = () => {
  btnStart = document.getElementById('btnstart')
  btnStart.addEventListener('click', event => setTimeout(startGame(event), 200))
}

const startGame = ({ target }) => {
  const btnStart = target
  const indigo = document.querySelector('.indigo')
  const purple = document.querySelector('.purple')
  const amber = document.querySelector('.amber')
  const lime = document.querySelector('.lime')
  const ULTIMO_LEVEL = 10

  class Game {
    constructor () {
      this.init()
      this.generateSecuence()
      setTimeout(() => this.nextLevel(), 1000)
    }

    init() {
      btnStart.parentElement.classList.add('hide')
      this.level = 1
      this.colors = {indigo, purple, amber, lime}
      this.chooseColor = this.chooseColor.bind(this)
    }
    generateSecuence() {
      this.secuence = new Array(ULTIMO_LEVEL).fill(0).map(() => Math.floor(Math.random()*4))
    }
    nextLevel() {
      this.sublevel = 0
      this.iluminateSecuency()
    }
    async iluminateSecuency() {
      for (let index = 0; index < this.level; index++) {
        let color = this.numberToColor(this.secuence[index])
        await this.iluminateColor(color)
        await this.delay(300)
      }
      await this.addClickEvent()
    }
    numberToColor(number) {
      const mapNumberColor = {0: this.colors.indigo, 1: this.colors.purple, 2: this.colors.amber, 3: this.colors.lime}
      return mapNumberColor[number]
    }
    colorToNumber(color) {
      const mapColorNumber = {indigo: 0, purple: 1, amber: 2, lime: 3}
      return mapColorNumber[color]
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
      return new Promise(resolve => {
        Object.keys(this.colors).forEach(color => this.colors[color].addEventListener('click', this.chooseColor))
        resolve()
      })
    }
    removeClickEvent() {
      Object.keys(this.colors).forEach(color => this.colors[color].removeEventListener('click', this.chooseColor))
    }
    chooseColor({ target }) { 
      const { color } = target.dataset
      const colorNumber = this.colorToNumber(color)
      this.iluminateColor(target)
      if (colorNumber === this.secuence[this.sublevel]) {
        this.sublevel++
        if (this.sublevel === this.level) {
          this.level++
          this.removeClickEvent()
          if (this.level === (ULTIMO_LEVEL+1)) {
            this.winGame()
            showBtnStart()
          } else {
            setTimeout(() => this.nextLevel(), 1000)
          }
        }
      } else {
        this.loseGame()
        showBtnStart()
      }
    }
    winGame() {
      swal('YOU WIN!', 'Congratulations for winning this game', 'success')
    }
    loseGame() {
      swal('YOU LOSE!', 'Try again, practice makes perfect', 'error')
      .then(() => this.removeClickEvent())
    }
    showBtnStart() {
      btnStart.parentElement.classList.remove('hide')
    }
  }

  window.game = new Game()
}

window.addEventListener('load', winLoad)
