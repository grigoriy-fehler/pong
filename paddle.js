'use strict'

class Paddle {
    constructor(w, h, color) {
        this.pos = {x: undefined, y: undefined}
        this.size = {x: w, y: h}
        this.speed = 400
        this.color = color
    }

    init(x) {
        this.pos.x = x
        this.pos.y = engine.view.y / 2 - this.size.y / 2
    }

    draw() {
        engine.drawRect(this.pos, this.size, this.color)
    }

    move_up() {
        if (this.pos.y > 0)
            this.pos = engine.move(this.pos, {x: 0, y: -this.speed})
    }

    move_down() {
        if (this.pos.y + this.size.y < engine.view.y)
            this.pos = engine.move(this.pos, {x: 0, y: this.speed})
    }
}