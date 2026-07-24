'use strict';

/**
 * Static methods
 * So basically its the same concept as static methods
 * in Java, so these are methods that can be invoked 
 * without initializing the class, so we can call them directly.
 * A basic ecample of a class with static methods is 
 * the Math class.
 * 
 * The this keyword takes the value from the class so 
 * the dot rule is applied here.
 * 
 * N.B. Static methods are inherited if a class extends
 * the class that has them
 */

class User {
    static origin = 'italy';

    constructor({name, surname, age}) {
        this._name = name;
        this._surname = surname;
        this._age = age;
    }
    static sayHi() {
        console.log('Hi man!');
    }
    sayHi() {
        console.log(`Hi, I am ${this.name} ${this.surname} and I am ${this.age} years old!`);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

class Admin extends User {
    constructor({name, surname, age, permissions}) {
        super({name, surname, age});
        this._permissions = permissions;
    }
    fireSomeone(){
        console.log('You are fired!');
    }

    get permissions() {
        return this._permissions;
    }

    set permissions(value) {
        this._permissions = value;
    }
}

const user = new User({name: 'Niko', surname: 'Salamanca', age: 25});

user.sayHi(); // Hi, I am Niko Salamanca and I am 25 years old!
User.sayHi(); // Hi man!
console.log(User.origin); // guest

Admin.sayHi();