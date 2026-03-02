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
/* by default
Rabbit.prototype = { constructor: Rabbit };
*/

/**
 * So important thing to understand is that every function
 * we create in JavaScript aumotatically gets a .prototype
 * property that is an object and it contains a constructor
 * property that initially point back to the function itself, 
 * but we can change it to point to another object so 
 * we can override the default prototype and make it point to 
 * another object, in this case animal.
 * whenever we create a new object with new Rabbit(), it will have
 * access to the properties of that object, in this case animal.
 * 
 * Why do every function gets a .prototype property?
 * 
 * -----
 * This concept is also appliable to primitives!!
 * -----
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

let bunny = new Rabbit();
bunny.name = 'Bunny';
bunny.walk(); // I am walking!
bunny.eat(); // i am eating!

/**
 * This is to check the default prototype behavior and also 
 * two ways to modify the prototype value without losing the 
 * constructor property.
 * 
 * THIS IS HOW primitives gets their methods!
 * initially they are normal primitives stored in memory
 * but when we try to access a property on them, JavaScript
 * automatically wraps them in their corresponding object wrapper
 * (String, Number, Boolean) which have the methods defined on their
 * prototypes, so we can use those methods on the primitives.
 * After we are done using the method, the wrapper object is discarded
 * and we are left with the original primitive value.
 * 
 * So basically for example the String inheriths from Object.prototype
 * but like i did below they  added methods to String.prototype so we 
 * can use those methods on string primitives.
 * 
 * SEE https://javascript.info/native-prototypes
 */
function Slave(){}
Slave.prototype = {
    constructor: Slave, // We don't want to lose the constructor property, so we add it back manually
    work() {
        console.log('I am working!')
    },
    toString() {
        return 'I am a slave!';
    }
}
// Slave.prototype.work = function() {
//     console.log('I am working!')
// }

if(Slave.prototype.constructor === Slave) console.log('Constructor is correct!'); // true

const tedBunny = new Slave();
tedBunny.work(); // I am working!
console.log(tedBunny.toString()); // I am a slave!


// THE SECTION BEFORE IS OUTDATED!!

let jeff = Object.create(animal); // Same as jeff.__proto__ = animal
jeff.name = 'Jeff';
jeff.walk();
console.log(Object.getPrototypeOf(jeff) === animal); // true

// ----
for (let key in bunny) {
    if(bunny.hasOwnProperty(key)) {
        console.log(key);
    } else {
        console.log(`Inherited: ${key}`);
    }
}
