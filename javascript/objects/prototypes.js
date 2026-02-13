let animal = {
    walk() {
        console.log('I am walking!')
    },
    eat() {
        console.log('i am eating!')
    },
}

let dog = {
    race: 'dobberman',
    name: 'doggo',
    __proto__: animal,
}

dog.walk