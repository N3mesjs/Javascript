/**
 * Demonstration of the use of the `this` keyword in JavaScript objects.
 * The `this` keyword refers to the object that is executing the current
 * function. In the context of an object method, `this` refers to the
 * object itself.
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
        console.log(`Hi my name is ${this.firstName}, and i am
            ${this.age} years old.`);
    }
}

person.Hi();