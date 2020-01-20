'use strict'

class Engine {
    constructor() {
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')

        this.delta = 0

        this.view = {
            x: canvas.width = 640,
            y: canvas.height = 360
        }
        
        this.ctx.font = '20px Verdana';
        
        this.key = {
            up: false,
            down: false,
            w: false,
            s: false,
            space: false
        }

        this.keyCoolDown = 10
    }

    // Graphics
    clearScreen() {
        this.ctx.clearRect(0, 0, this.view.x, this.view.y)
    }

    drawRect(pos, size, color) {
        this.ctx.beginPath()
        this.ctx.rect(pos.x, pos.y, size.x, size.y)
        this.ctx.fillStyle = color
        this.ctx.fill()
    }

    drawText(text, pos, color) {
        this.ctx.beginPath()
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, pos.x, pos.y);
    }

    // Input
    processInput(event) {
        const key = (event.type == 'keydown') ? true : false
        
        switch (event.keyCode) {
            case 87:
                this.key.w = key
                break
            case 83:
                this.key.s = key
                break
            case 38:
                this.key.up = key
                break
            case 40:
                this.key.down = key
                break
            case 32:
                this.key.space = key
                break
        }
    }

    // Physics
    move(position, velocity) {
        this.pos = {
            x: position.x,
            y: position.y
        }

        this.pos.x += velocity.x * this.delta
        this.pos.y += velocity.y * this.delta

        return this.pos
    }

    check_collision(a, b) {
        if (a.pos.x + a.size.x < b.pos.x || a.pos.x > b.pos.x + b.size.x) return false
        if (a.pos.y + a.size.y < b.pos.y || a.pos.y > b.pos.y + b.size.y) return false
        
        return true
    }

    loop(callback) {
        this.clearScreen()

        this.timestamp = performance.now()
    
        if (this.timestamp) {
            this.delta = (this.timestamp - previous) / 1000
            callback()
            previous = this.timestamp
        }

        if (this.keyCoolDown > 0) this.keyCoolDown--
    
        window.requestAnimationFrame(() => { engine.loop(callback) })
    }
}