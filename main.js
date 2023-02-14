let { Dog } = require('./classes/dog')

let bob = new Dog('bob', 'happy')
bob.walks().eats().stats()

let dave = new Dog('dave', 'mega happy')