'use strict'

// https://javascript.info/prototypes

/**
 * So for objects we would need to inherit from
 * another object, like for classes, for ex. we have
 * an user object, but we also need one for
 * guest and one for admin
 * 
 * This is where [[Prototype]] enters, this is 
 * an hidden property that is inside objects and
 * can be modified with getters and setters,
 * one of them is the __proto__ property.
 * It will have either null or references another
 * objects an that objects is called a prototype
 * 
 * So basically the [[Prototype]] is similar
 * to the [[Enviroment]] property for the
 * fact that they cannot be accessed and hidden
 * 
 * THIS will only work for reading, if in an
 * object child we modify a property it 
 * will only affect the property in the child
 * object and not in the parent object(pretty
 * obvious in my perspective)
 * 
 * N.B. This keyword is not affected by prototypes
 * so it will only be conditionated by the object
 * before the dot, nothing more nothing less.
 * 
 * Strange thing, if an object does not inherit
 * from an object, it will automatically inherit
 * from the Object.prototype object, so we can
 * access the __proto__ setter and getter also to
 * toString() or valueOf() methods
 */

// animal inherits from Object.prototype
let animal = {
    walk() {
        console.log('I am walking!')
    },
    eat() {
        console.log('i am eating!')
    },
}

// dog inherits from animal
let dog = {
    race: 'dobberman',
    name: 'doggo',
    __proto__: animal, // sets dog.[[Prototype]] = animal
}

dog.walk();

dog.walk = function() {
    console.log('Hey i am walking watch me!! i am a '+ this.name);
};

//only affects dog
dog.walk();
animal.walk();

// another way to inherit

let duck = {
    name: 'Duffy',
    quack() {
        console.log('QUACK!');
    }
}

duck.__proto__ = animal;
duck.quack();
duck.walk();

// ------------

console.log(typeof Object) // this shi is a funtion, cause Object is a constructor function

console.log('----')
console.log(Object.getOwnPropertyDescriptors(Object));
console.log('----')