'use strict'

let animal = {
    walk() {
        console.log('I am walking');
    },
    eat() {
        console.log('I am eating');
    }
}

function Rabbit(name){
    this.name = name
}

let rat = {
    run() {
        console.log('I am running!')
    },
}
rat.__proto__ = animal;

Rabbit.prototype = animal

const bunny = new Rabbit('Bugs Bunny')

bunny.eat();
bunny.hi();
console.log(Object.getOwnPropertyDescriptors(bunny));
console.dir(bunny);
console.dir(rat);