/**
 * Creating an object using the Object constructor
 * and adding properties to it.
 */
const users = new Object();

users.name = "John";
users.age = 30;
users.isAdmin = true;
console.log(users);
console.log(users["age"])

/**
 * Simple fruit example
 * So we take a fruit as a promt and use it as the 
 * property name inside the object.
 */
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
}
console.log(bag);
// N.B. The access in this way with the square brackets
// Only accepts a String or Symbol
console.log(bag["apple"])

/**
 * 
 * @param {string} name 
 * @param {number} age 
 * @returns {object} {name: name, age: age}
 * 
 * Shorthand property names, This is a basic example of a 
 * function that creates and return an object.
 * This syntax is the same as: name: name and age: age,
 * so the property names are taken from the variable names.
 */
function makeUser(name, age) {
    return {
        name,
        age,
        isGay: false
    };
}


let mattia = makeUser("Mattia", 25);
console.log(mattia)

/**
 * in operator is used to check whether a property exists in an object.
 */
console.log("cacca" in mattia);
console.log("age" in mattia);

delete mattia.isGay;
/**
 * for..in loop iterates over all enumerable properties of an object.
 */
for (let key in mattia) {
    console.log(`${key}: ${mattia[key]}`);
}
