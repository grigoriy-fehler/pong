'use strict'

const init = function() {
    ball.init()
    paddles[0].init(10)
    paddles[1].init(engine.view.x - paddles[1].size.x - 10)
    score = [0, 0]
}

const render = function() {
    switch (state) {
        case 0:         // main menu
            renderMainMenu()
            break
        case 1:         // in-game
            renderInGame()
            break
        case 2:         // pause menu
            renderPauseMenu()
            break
        case 3:         // game over
            renderGameOver()
            break
    }
}

const update = function(delta) {
    switch (state) {
        case 0:         // main menu
            updateMainMenu()
            break
        case 1:         // in-game
            updateInGame()
            break
        case 2:         // pause menu
            updatePauseMenu()
            break
        case 3:         // game over
            updateGameOver()
            break
    }
}

const engine = new Engine()
const ball = new Ball(10, 10)
const paddles = [new Paddle(10, 60, '#4d88ff'), new Paddle(10, 60, '#ff6666')]

let previous = 0

let com = false
let state = 0
let score

init()

engine.loop(() => {
    update()
    render()
})

window.addEventListener('keydown', event => {engine.processInput(event)})
window.addEventListener('keyup', event => {engine.processInput(event)})