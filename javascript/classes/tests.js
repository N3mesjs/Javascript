'use strict';

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I work at ${this.company}.`);
    }

    ["greet" + "User"]() {
        console.log(`Welcome, ${this.name}!`);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let animal = class Animal {
    constructor(type) {
        this.type = type;
    }

    makeSound() {
        console.log(`The ${this.type} makes a sound.`);
    }

    sayType() {
        console.log(`This is a ${this.type}.`);
    }

    sayClass() {
        console.log(`The class is ${Animal}.`);
    }
}

let john = new User('John', 25, 'alessio@gmail.com');

john.name = 'John Doe';

john.sayHello(); // Hello, my name is John and I work at undefined.
john.greetUser(); // Welcome, John!

let dog = new animal('dog');
dog.makeSound(); // The dog makes a sound.
dog.sayType(); // This is a dog.
dog.sayClass(); // The class name is function Animal(type) { ... }.