'use strict'

class Ball {
    constructor(w, h) {
        this.pos = {x: undefined, y: undefined}
        this.size = {x: w, y: h}
        this.vel = {x: undefined, y: undefined}
        this.initSpeed = 340
    }

    init() {
        this.pos.x = engine.view.x / 2 - this.size.x / 2
        this.pos.y = engine.view.y / 2 - this.size.y / 2
        this.speed = this.initSpeed
        this.vel.x = (Math.random() > 0.5 ? 1 : -1) * this.speed
        this.vel.y = Math.random() * this.vel.x * 2 - this.vel.x
    }

    draw() {
        engine.drawRect(this.pos, this.size, '#fff')
    }

    check_map_collision() {
        if (this.pos.y + this.size.y >= engine.view.y) {
            this.vel.y *= -1
        } else if (this.pos.y <= 0) {
            this.vel.y *= -1
        } else if (this.pos.x + this.size.x < 0) {
            score[1]++
            this.init()
        } else if (this.pos.x > engine.view.x) {
            score[0]++
            this.init()
        }
    }

    check_paddle_collision() {
        if (engine.check_collision(this, paddles[0])) this.vel.x *= -1
        if (engine.check_collision(this, paddles[1])) this.vel.x *= -1
    }
  
    update() {
        this.pos = engine.move(this.pos, this.vel)

        this.check_map_collision()
        this.check_paddle_collision()
    }
}