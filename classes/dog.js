let { Animal } = require('./animal')

class Dog extends Animal {
    constructor(name, happy){
        super(name, happy)
        this.happy = happy
    }

    playBall() {
        this.health += 10
        this.hunger -= 10
        console.log(`${this.name} is happy`)
        return this
    }
    walks() {
        console.log(`taking ${this.name} for a walk, they are ${this.happy}`)
        this.health += 10
        return this
    }
}

module.exports = {
    Dog
}