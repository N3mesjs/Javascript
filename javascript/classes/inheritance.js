'use strict';

// https://javascript.info/class-inheritance

/**
 * N.B. Classes are a syntactic sugar,
 * they are literally constructor functions
 * with some special syntax to make object inheritance
 * easier and more intuitive, how does it work?
 * 
 * When we create a class we are creating a constructor
 * function, and the method inside of the class are
 * added inside the .prototype of the constructor function,
 * so when we create an instance of the class it will
 * have access to the methods of the class through the
 * prototype, and when we inherith from another class,
 * the .prototype of the child will point to the
 * .prototype of the parent, this makes sense
 * because we don't want to access a method saying
 * admin.prototype.sayHi().
 * 
 * This is in a way different to object prototypes, because
 * When implementing inheritance, the .prototype property of 
 * the child constructor must point to an object 
 * (specifically, the parent's .prototype object), and not to 
 * the parent constructor function itself!
 */

class User {
    constructor({name, surname, age}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name} ${this.surname} and I am ${this.age} years old!`);
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
    set fullName({name, surname}) {
        this.name = name;
        this.surname = surname;
    }
}

/**
 * If we want to extend the constructor
 * we define the new constructor but also we need
 * to call the super constructor with the super()
 * keyword, so we call the deault constructor of 
 * the parent and also add new properties
 */

class Admin extends User {
    constructor({name, surname, age, permissions}) {
        super({name, surname, age});
        this.permissions = permissions;
    }
    fireSomeone(){
        console.log('You are fired!');
        console.log(super.fullName); // super is a keyword that allows to access the parent
    }                                // class methods and properties
}

let admin = new Admin({name: 'Niko', surname: 'Salamanca', age: 25});

admin.sayHi();
admin.fireSomeone();