const renderScore = function() {
    engine.drawText('Player 1: ' + score[0], {x: 20, y: 30}, paddles[0].color)
    engine.drawText('Score', {x: 290, y: 30}, '#eee')
    engine.drawText('Player 2: ' + score[1], {x: engine.view.x - 140, y: 30}, paddles[1].color)
};

const updateMainMenu = function() {
    if (engine.key.space && !engine.keyCoolDown) {
        state = 1
        engine.keyCoolDown = 10
    }
}

const renderMainMenu = function() {
    renderInGame()
    engine.drawText('Press Space to Start', {x: 220, y: 160}, '#cfc')
}

const updateInGame = function() {
    ball.update()
    if (engine.key.w) paddles[0].move_up()
    if (engine.key.s) paddles[0].move_down()
    if (!com) {
        if (engine.key.up) paddles[1].move_up()
        if (engine.key.down) paddles[1].move_down()
    }

    if (engine.key.space && !engine.keyCoolDown) {
        state = 2
        engine.keyCoolDown = 10
    }

    if (score[0] > 9 || score[1] > 9) state = 3
}

const renderInGame = function() {
    ball.draw()
    paddles.forEach(paddle => {
        paddle.draw()
    })
    renderScore()
}

const updatePauseMenu = function() {
    if (engine.key.space && !engine.keyCoolDown) {
        state = 1
        engine.keyCoolDown = 10
    }
}

const renderPauseMenu = function() {
    renderInGame()
    engine.drawText('Paused', {x: 285, y: 160}, '#cfc')
}

const updateGameOver = function() {
    if (engine.key.space && !engine.keyCoolDown) {
        init()
        state = 0
        engine.keyCoolDown = 10
    }
}

const renderGameOver = function() {
    renderInGame()
    if (score[0] > score[1]) {
        engine.drawText('Player 1 Wins!', {x: 245, y: 160}, paddles[0].color)
    } else {
        engine.drawText('Player 2 Wins!', {x: 245, y: 160}, paddles[1].color)
    }
}