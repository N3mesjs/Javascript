/**
 * Demonstration of the use of the `this` keyword in JavaScript objects.
 * The `this` keyword refers to the object that is executing the current
 * function. In the context of an object method, `this` refers to the
 * object itself.
 */

/**
 * In this object we define a method `Hi` that uses `this` to access
 * notice that we are creating the function using the shorthand method syntax.
 * Instead of writing `Hi: function() { ... }`, we simply write `Hi() { ... }`.
 */

const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    size: {
        height: 170,
        weight: 65
    },
    Hi(){
        console.log(`Hi my name is ${this.firstName}, and i am ${this.age} years old.`);
    },
    Test(){
        return this
    },
    ref: this // N.B.: Here, `this` does not refer to the `person` object
              // because the object is not fully constructed yet. so it will reference
              // the global object (or be undefined in strict mode). or if the object
                // is defined inside a function, it will refer to the context of that function.
}

person.Hi();
console.log(person.Test());
console.log(person.Test().firstName);
console.log(person.ref); // undefined, because `this` at this point does not refer to the `person` object