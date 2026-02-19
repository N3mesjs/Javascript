'use strict';

let animal = {
    walk() {
        console.log('I am walking!')
    },
    eat() {
        console.log('i am eating!')
    },
}

function Rabbit() {}
Rabbit.prototype = animal;
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

/**
 * Strange thing that we have in javascript, 
 * we can define a property in an object to say
 * where to inherit when we create an object of that
 * type.
 * 
 * HOW DOES IT WORK??
 * every function we create for example also the
 * constructor function we have here below
 * carry a property named prototype,
 * so it's likely a global thing that javascript
 * assigns as a small toolbox,
 * We also have for example Function.prototype
 * that every function inherit and here we have the
 * funcions .call, .apply!! so in this case for
 * objects we can access that value and modify it
 * to say an object that we would like to inherit 
 * from.
 * 
 * This concept is also appliable to primitives!!
 * 
 * NOTE THIS IS VERY IMPORTANT:
 * 1. The .prototype is ONLY for functions (specifically Constructor Functions).
 * Normal objects don't have it.
 * 2. EXCEPTION: Arrow Functions (() => {}) DO NOT have a .prototype property
 * because they cannot be used with 'new'.
 * 3. WARNING: When you overwrite Rabbit.prototype = animal, you lose the 
 * default "constructor" property. The new objects won't know they were 
 * created by Rabbit anymore unless you manually re-add it!
 */

let bunny = new Rabbit()

console.log(Object.getOwnPropertyDescriptors(Rabbit));
console.log('-----')
console.log(Object.getOwnPropertyDescriptors(bunny));


// THE SECTION BEFORE IS OUTDATED!!

let jeff = Object.create(animal); // Same as jeff.__proto__ = animal
jeff.name = 'Jeff';
jeff.walk();
console.log(Object.getPrototypeOf(jeff) === animal); // true